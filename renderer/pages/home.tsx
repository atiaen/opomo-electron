import React from 'react';
import 'primeicons/primeicons.css';
import Head from 'next/head';
import Link from 'next/link';
import TopBar from '../components/top_bar';
import LeftSide from '../components/left_home';
import MiddleSide from '../components/middle_home';
import RightSide from '../components/right_home';

function Home() {
  return (
    <React.Fragment>
      <TopBar />
      <div className='flex justify-between px-3 mt-3 h-5/6'>
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
    </React.Fragment>
  );
};

export default Home;
