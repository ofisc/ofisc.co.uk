import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';
import { Social } from '../components/social';
import { scheduleUrl } from '../components/share';

const Schedule = ({ data: { upcoming, past, site: { siteMetadata: { siteUrl }} } }) =>
  <Layout pageTitle='Event Schedule'>
    <h1>Upcoming Schedule</h1>
    <EventList {...upcoming} siteUrl={siteUrl}/>
    <h1 className="mt5">Past Events</h1>
    <EventList {...past} siteUrl={siteUrl} />
  </Layout>

const EventList = ({ edges, siteUrl }) =>
  edges.map(({ 
    node: { id, frontmatter: { title, date, announcement }, excerpt, parent: { name } },
    }) =>
    <div className="shadow-5 ba b--light-gray grow pa2 pl3">
      <Link className="link near-black hover-mid-gray"
        to={name}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <Social announcement={announcement} shareUrl={scheduleUrl(siteUrl, name)}/>
        <div className="mt3">
          <p>{excerpt}</p>
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
        excerpt(pruneLength: 160)
        frontmatter {
          date(formatString: "MMM D, YYYY")
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
  }
  query($publicationDate: Date) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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