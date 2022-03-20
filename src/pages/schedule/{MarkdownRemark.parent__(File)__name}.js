import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout';

const Template = ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className=""
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default Template;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`