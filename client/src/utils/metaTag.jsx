import React from 'react';
import { Helmet } from 'react-helmet-async';

export function commonMeta() {
  return (
    <Helmet>
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content="사이버 점집 KUROSA_2023"
      />
      <meta
        property="og:site_name"
        content="사이버 점집 KUROSA_2023"
      />
      <meta
        property="og:description"
        content="cyber fortune teller"
      />
      <meta
        property="og:image"
        content="assets/Images/metaImg.png"
      />
      <meta
        property="og:url"
        content="https://kurosa-project.vercel.app"
      />
      <meta
        name="twitter:card"
        content="summary"
      />
      <meta
        name="twitter:title"
        content="사이버 점집 KUROSA_2023"
      />
      <meta
        name="twitter:description"
        content="cyber fortune teller"
      />
      <meta
        name="twitter:url"
        content="https://kurosa-project.vercel.app"
      />
      <meta
        name="twitter:image"
        content="assets/Images/metaImg.png"
      />
    </Helmet>
  );
}
