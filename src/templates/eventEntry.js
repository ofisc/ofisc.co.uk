import React from 'react';

import { Layout } from '../components/layout';

const eventEntry = props => {

  const { pageContext } = props;
  const { title, description } = pageContext;

  return (
    <Layout pageTitle='Event Entry'>
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
      </div>
    </Layout>
  )
}

export default eventEntry;