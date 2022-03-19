import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';

const EventSchedule =  ({ data: { allEvent: { nodes } } })  => {
  return (
    <Layout pageTitle='Event Schedule'>
      <h1>Event Schedule</h1>
      {
        nodes.map(({date, title, path}) => {
          const relativePath = path.replace(/^events\//,'');
          return(
            <div className="shadow-5 ba b--light-gray grow mb4 pa2">
              <Link className="link near-black hover-mid-gray"
                to={relativePath}>
              <h2>{title}</h2>
              <div>{date}</div>
              </Link>
            </div>
          );
        })
      }
    </Layout>
  );
}

export default EventSchedule;

export const query = graphql`
  query {
    allEvent {
      nodes {
        id
        date
        title
        path
      }
    }
  }
`