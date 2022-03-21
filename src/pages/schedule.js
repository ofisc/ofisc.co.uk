import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';

const Schedule =  ({ data: { allMarkdownRemark: { edges } } })  => {
  return (
    <Layout pageTitle='Event Schedule'>
      <h1>Upcoming Schedule</h1>
      {
        edges.map(({ node: { id, frontmatter: { title, date }, parent: { name } } }) =>
          <div className="shadow-5 ba b--light-gray grow pa2 pl3">
            <Link className="link near-black hover-mid-gray"
              to={name}>
              <div className="pure-g">
                <div className="pure-u-1-4">
                  <h2>{date}</h2>
                </div>
                <div className="pure-u-3-4">
                  <h2>{title}</h2>
                </div>
              </div>
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
            date(formatString: "DD/MM/YY")
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