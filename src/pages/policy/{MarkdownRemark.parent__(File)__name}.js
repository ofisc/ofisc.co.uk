import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout';
import { scheduleUrl } from '../../components/share';

const Template = ({data}) => {

  const { 
    markdownRemark: { frontmatter: { title, version }, html, parent: { name: path } },
    site: { siteMetadata: { siteUrl } }
  } = data;

  return (
    <Layout pageTitle={title}>
      <div className="">
        <h1>{title}</h1>
        <div className="f5 pb3">Version {version}</div>

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

    site {
      siteMetadata {
        siteUrl
      }
    }

    markdownRemark(
      id: { eq: $id },
      fields: {
        sourceInstanceName: {eq: "policy" }
      }
    ) {
      html
      frontmatter {
        title
        version(formatString: "DD/MM/YYYY")
      }
      parent {
        ... on File {
            name
        }
      }
    }
  }
`