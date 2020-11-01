import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Error.module.css';
import Link from 'next/link';
import Layouts from '@components/Layouts';

const Custom404 = () => {
  return (
    <Layouts title="Page Not Found">
      <section className={styles.errorPageWrapper}>
        <Container className={styles.errorPageSubWrapper}>
          <div className={styles.errorPageSubContent}>
            <img src="/img/notfound.jpg" alt="404" />
          </div>
        </Container>
      </section>
    </Layouts>
  );
};

export default Custom404;
