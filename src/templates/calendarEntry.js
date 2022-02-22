import React from 'react';

import { Layout } from '../components/layout';

const calendarEntry = props => {

  const { pageContext } = props;
  const { title, description } = pageContext;

  return (
    <Layout pageTitle='Calendar Entry'>
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
      </div>
    </Layout>
  )
}

export default calendarEntry;