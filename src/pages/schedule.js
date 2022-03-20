import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';

const Schedule =  ({ data: { allMarkdownRemark: { edges } } })  => {
  return (
    <Layout pageTitle='Event Schedule'>
      <h1>Upcoming Schedule</h1>
      {
        edges.map(({ node: { id, frontmatter: { title, date }, parent: { name }}}) =>
            <div className="shadow-5 ba b--light-gray grow mb4 pa2">
                <Link className="link near-black hover-mid-gray"
                    to={name}>
                    <h2>{title}</h2>
                    <h2>{date}</h2>
                </Link>
            </div>
        )
      }
    </Layout>
  );
}

export default Schedule;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          parent {
            ... on File {
                name
            }
          }
        }
      }
    }
  }
`