import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout';
import { Social } from '../../components/social';

const Template = ({data}) => {

  const { 
    markdownRemark: { frontmatter: { title, date, announcement }, html, parent: { name: path } },
    site: { siteMetadata: { siteUrl } }
  } = data;

  const shareUrl = siteUrl + '/schedule/' + path;

  return (
    <Layout pageTitle={title}>
      <div className="">
        <h1>{title}</h1>
        <h2>{date}</h2>

        <div className="pb4">
          <Social shareUrl={shareUrl} announcement={announcement}/>
        </div>

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
        date(formatString: "DD MMMM YYYY")
        title
        announcement
      }
      parent {
        ... on File {
            name
        }
      }
    }
  }
`