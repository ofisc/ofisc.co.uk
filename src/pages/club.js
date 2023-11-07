import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';

const Club = ({data}) => {

  const { 
    markdownRemark: { frontmatter: { title, version }, html, parent: { name: path } },
  } = data;

  return (
    <Layout pageTitle={title}>
      <div className="">
        <h1>{title}</h1>
        <div className=""
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

    </Layout>
  );
}

export default Club;

export const pageQuery = graphql`
  {
    markdownRemark(
      fileAbsolutePath: {regex: "/(/club.md$)/"}
    ) {
      html
      frontmatter {
        date(formatString: "dddd D MMMM YYYY")
        title
      }
      parent {
        ... on File {
            name
        }
      }
    }
  }
`