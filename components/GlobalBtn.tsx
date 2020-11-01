import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import styles from '@styles/Navbar.module.css';

const GlobalBtn = ({ tag, link }) => {
  return (
    <Link href={`/${link}`} passHref>
      <Nav.Link className={styles.nav__btn}>{tag}</Nav.Link>
    </Link>
  );
};

export default GlobalBtn;
