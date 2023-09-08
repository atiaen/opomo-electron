import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/global.css';

function OPOMO({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default OPOMO