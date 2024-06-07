// app/head.tsx
import React from 'react';
import Head from 'next/head';

const CustomHead: React.FC = () => {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/icons/icon-192x192.png" />
      <meta name="description" content="Your App Description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default CustomHead;
