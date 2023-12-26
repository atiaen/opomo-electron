import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/global.css';
import '../styles/spinner.css';
import 'react-circular-progressbar/dist/styles.css';

function OPOMO({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default OPOMO