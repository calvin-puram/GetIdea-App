import React, { useState } from 'react';
import styles from '@styles/Navbar.module.css';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';


const Menu = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <>
      <div className={styles.avatar__wrapper}>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
          className={styles.avatar}
        />
        <FaChevronDown
          className={styles.avatarIcon}
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />
      </div>
      {/* dropdown */}
      {toggleDropdown && (
        <div className={styles.dropdownNav}>
          <Link href="/favorite" passHref>
            <Nav.Link className={styles.dropdownNav__itemsLinks}>
              Favorite{' '}
            </Nav.Link>
          </Link>
          <Link href="/settings" passHref>
            <Nav.Link className={styles.dropdownNav__itemsLinks}>
              Settings{' '}
            </Nav.Link>
          </Link>
          <Link href="/contact" passHref>
            <Nav.Link className={styles.dropdownNav__itemsLinks}>
              Logout{' '}
            </Nav.Link>
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
