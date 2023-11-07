import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';

const Membership = ({data}) => {

  const { 
    markdownRemark: { frontmatter: { title }, html },
  } = data;

  return (
    <Layout pageTitle={title}>
      <div className="">
        <h1>{title}</h1>
        <div className="" dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </Layout>
  );
}

export default Membership;

export const pageQuery = graphql`
  {
    markdownRemark(
      fileAbsolutePath: {regex: "/(/membership.md$)/"}
    ) {
      html
      frontmatter {
        date(formatString: "dddd D MMMM YYYY")
        title
      }
    }
  }
`