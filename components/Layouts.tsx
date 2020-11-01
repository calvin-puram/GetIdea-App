import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layouts = ({ children, title  }) => {
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
