// add as a dev-proxy
const fileSystemAPI = require('./src/cms/file-system-api-plugin/fs-express-api');

module.exports = {
  siteMetadata: {
    title: 'Gatsby NetlifyCMS (fs-api)',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`, // default: undefined
        stylesPath: `${__dirname}/src/cms/cms.css`, // default: undefined
        enableIdentityWidget: false, // default: true
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
        manualInit: true,
      },
    },
  ],
  // add the file-system api as an api proxy:
  // https://next.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: fileSystemAPI,
};
