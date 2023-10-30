import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout';
import { Social } from '../../components/social';
import { scheduleUrl } from '../../components/share';

const Template = ({data}) => {

  const { 
    markdownRemark: { frontmatter: { title, date, announcement }, html, parent: { name: path } },
    site: { siteMetadata: { siteUrl } }
  } = data;

  return (
    <Layout pageTitle={title}>
      <div className="">
        <h1>{title}</h1>
        <div className="f3 fw6">{date}</div>

        <div className="pt4 pb4">
          <Social shareUrl={scheduleUrl(siteUrl, path)} announcement={announcement}/>
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

    markdownRemark(
      id: { eq: $id },
      fields: {
        sourceInstanceName: {eq: "schedule" }
      }
    ) {
      html
      frontmatter {
        date(formatString: "dddd D MMMM YYYY")
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