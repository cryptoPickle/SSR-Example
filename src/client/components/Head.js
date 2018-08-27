import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, description, img }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    {description ? (
      <meta property="og:description" content={description} />
    ) : null}
  </Helmet>
);

export default Head;
