import React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';

const Calendar =  ({ data: { allCalendar: { nodes } } })  => {
  return (
    <Layout pageTitle='Calendar'>
      <h1>Calendar</h1>
      {
        nodes.map(({date, title, path}) => {
          const relativePath = path.replace(/^calendar\//,'');
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

export default Calendar;

export const query = graphql`
  query {
    allCalendar {
      nodes {
        id
        date
        title
        path
      }
    }
  }
`
  ;