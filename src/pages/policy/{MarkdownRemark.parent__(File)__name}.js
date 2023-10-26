import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout';
import { scheduleUrl } from '../../components/share';

const Template = ({data}) => {

  const { 
    markdownRemark: { frontmatter: { title, date }, html, parent: { name: path } },
    site: { siteMetadata: { siteUrl } }
  } = data;

  return (
    <Layout pageTitle={title}>
      <div className="">
        <h1>{title}</h1>
        <div className="f3 fw6">{date}</div>

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

    markdownRemark(id: { eq: $id }) {
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