import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      <h4>{data.posts.totalCount} Posts</h4>
      {data.posts.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <small> — {node.frontmatter.date}</small>
          </h2>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
