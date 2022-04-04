import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';

const Schedule = ({ data: { upcoming, past } }) =>
  <Layout pageTitle='Event Schedule'>
    <h1>Upcoming Schedule</h1>
    <EventList {...upcoming} />
    <h1 className="mt5">Past Events</h1>
    <EventList {...past} />
  </Layout>

const EventList = ({ edges }) =>
  edges.map(({ node: { id, frontmatter: { title, date }, parent: { name } } }) =>
    <div className="shadow-5 ba b--light-gray grow pa2 pl3">
      <Link className="link near-black hover-mid-gray"
        to={name}>
        <div className="pure-g">
          <div className="pure-u-1-2 pure-u-sm-3-8 pure-u-md-1-4">
            <h2>{date}</h2>
          </div>
          <div className="pure-u-1-2 pure-u-sm-5-8 pure-u-md-3-4">
            <h2>{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  )

export default Schedule;

export const pageQuery = graphql`
  fragment ScheduledEvent on MarkdownRemarkConnection {
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
  query($publicationDate: Date) {
    upcoming: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] },
        filter: {frontmatter: {date: {gte: $publicationDate}}}
    ) {
      ...ScheduledEvent
    }
    ,
    past: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] },
        filter: {frontmatter: {date: {lt: $publicationDate}}}
    ) {
      ...ScheduledEvent
    }
}`