import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';
import { Social } from '../components/social';
import { scheduleUrl } from '../components/share';

const Schedule = ({ data: { upcoming, past, site: { siteMetadata: { siteUrl }} } }) =>
  <Layout pageTitle='Event Schedule'>
    <h1>Upcoming Schedule</h1>
    <div className="mt5">
      <EventList {...upcoming} siteUrl={siteUrl}/>
    </div>
    <h1 className="mt5">Past Events</h1>
    <div className="mt5">
      <EventList {...past} siteUrl={siteUrl} />
    </div>
  </Layout>

const EventList = ({ edges, siteUrl }) =>
  edges.map(({ 
    node: { id, frontmatter: { title, date, announcement }, excerpt, parent: { name } },
    }) =>
    <div className="shadow-5 ba b--light-gray grow pl3 pr3 mb4 bg-white-30">
      <Link className="link near-black hover-mid-gray" to={name}>
        <div className="f3 fw7 lh-solid pt4 pb3">{title}</div>
        <div className="flex items-start justify-between">
          <div className="f3 fw6">{date}</div>
          <Social announcement={announcement} shareUrl={scheduleUrl(siteUrl, name)}/>
        </div>
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
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {frontmatter: {date: {lt: $publicationDate}}}
    ) {
      ...ScheduledEvent
    }
}`