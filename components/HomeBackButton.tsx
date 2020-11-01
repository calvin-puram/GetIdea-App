import { MdKeyboardBackspace } from 'react-icons/md';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';

const HomeBackButton = () => {
  return (
    <Link href="/" passHref>
      <Nav.Link className={styles.back__redirect}>
        <MdKeyboardBackspace className={styles.backButton} /> <span>Back</span>
      </Nav.Link>
    </Link>
  );
};

export default HomeBackButton;
