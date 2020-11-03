import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Error.module.css';
import Link from 'next/link';
import Layouts from '@components/Layouts';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <Layouts title="Page Not Found">
      <section className={styles.errorPageWrapper}>
        <Container className={styles.errorPageSubWrapper}>
          <div className={styles.errorPageSubContent}>
            <Image
              src="/img/notfound.jpg"
              alt="404"
              width="625px"
              height="500px"
            />
          </div>
        </Container>
      </section>
    </Layouts>
  );
};

export default Custom404;
