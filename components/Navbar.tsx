import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from '@styles/Navbar.module.css';
import Link from 'next/link';
import CustomLink from './Link';
import GlobalBtn from './GlobalBtn';
import Menu from './Menu';

const NavbarItem = () => {
  return (
    <Navbar className={styles.navbar} expand="lg" fixed="top">
      <Link href="/" passHref>
        <Navbar.Brand href="#home">
          <div className={styles.logo__section}>
            <div className={styles.logo__title}>GetIdea</div>
            <img src="/img/logo.png" alt="logo" />
          </div>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className={styles.nav__items}>
            <CustomLink href="/">
              <a className={styles.nav__itemsLinks}>Home</a>
            </CustomLink>

            <CustomLink href="/ideas">
              <a className={styles.nav__itemsLinks}>Ideas</a>
            </CustomLink>

            <CustomLink href="/blog">
              <a className={styles.nav__itemsLinks}>Blog</a>
            </CustomLink>

            <CustomLink href="/about">
              <a className={styles.nav__itemsLinks}>About</a>
            </CustomLink>

            <CustomLink href="/contact">
              <a className={styles.nav__itemsLinks}>Contact </a>
            </CustomLink>
          </div>

          <div className={styles.nav__items__options}>
            <Menu />
            <div className="mr-1">
              <GlobalBtn tag="Be A Contributor" link="contribute" />
            </div>
            <GlobalBtn tag="Login" link="login" />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarItem;
