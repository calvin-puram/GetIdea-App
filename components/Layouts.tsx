import React, { FC } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const Layouts: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title} | GetIdea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navbar */}
      <Navbar />
      {children}
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layouts;
