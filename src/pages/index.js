import React from 'react';

import { graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/layout';

const Home = ({data}) => (
  <Layout pageTitle='Home'>
      <h1>Welcome To Oxford Figure Ice Skating Club</h1>
      <p>Oxford Figure Ice Skating Club (OFISC) is a self-funded organisation run by a voluntary committee, with a current membership of 40 skaters. The club is an affiliated member of British Ice Skating, the governing body for ice skating in the UK.</p>
      <p>We welcome new members up to the age of 18 who have gained Skate UK Gold Level.</p>
      <p>OFISC offers skaters the opportunity to train and develop their skills in a supportive, friendly and fun environment and to take part in all club activities. We have a small team of professional coaches who lead the sessions and provide a fun learning experience.</p>
      <p>
        Our regular ice time is on a Friday afternoon at Oxford Ice Rink from 5:30pm to 6:30pm.
      </p>
      <div className="pt4">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData}/>
      </div>
  </Layout>
)

export default Home;

export const query = graphql`
  query {
    file(relativePath: { regex: "/IMG_5491.png/" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          width: 600
          placeholder: BLURRED,
        )
      }
    }
  }
`
