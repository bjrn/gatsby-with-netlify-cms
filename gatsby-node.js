const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ loaders, actions, stage }) => {
  var config = {};

  if (stage === 'build-javascript') {
    // turn off source-maps
    config.devtool = false;
  }

  // Previously this was needed, but looks like it has been fixed
  // in more recent versions of netlify-cms
  // One solution is to customize your webpack configuration to replace the offending module with a dummy module during server rendering.
  // gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  // if (stage === 'build-html') {
  //   config.module = {
  //     rules: [
  //       {
  //         test: /(netlify-cms)/,
  //         use: loaders.null(),
  //       },
  //     ],
  //   };
  // }

  actions.setWebpackConfig(config);
};
