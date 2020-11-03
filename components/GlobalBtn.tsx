import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import styles from '@styles/Navbar.module.css';

interface BtnProps {
  tag: string;
  link: string;
}

const GlobalBtn: FunctionComponent<BtnProps> = ({ tag, link }) => {
  return (
    <Link href={`/${link}`} passHref>
      <Nav.Link className={styles.nav__btn}>{tag}</Nav.Link>
    </Link>
  );
};

export default GlobalBtn;
