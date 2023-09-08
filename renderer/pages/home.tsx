import React from 'react';
import 'primeicons/primeicons.css';
import Head from 'next/head';
import Link from 'next/link';
import TopBar from '../components/top_bar';

function Home() {
  return (
    <React.Fragment>
      <TopBar />
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
};

export default Home;
