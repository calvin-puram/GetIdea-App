import Layouts from '@components/Layouts';
import styles from '@styles/Blog.module.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import SingleBlogCard from '@components/SingleBlogCard';

const blog = () => {
  return (
    <Layouts title="Blog">
      <section className={styles.blogHeader}>
        <Container>
          <Row>
            <Col lg="6" md="12" className={styles.blogHeader__seperator1}>
              <h2 className={styles.blogHeader__Header}>
                Welcome to Our Forever Updated Blog Post!
              </h2>
              <p className={styles.blogHeader__para}>
                Be informed! Never miss a single post
              </p>
            </Col>
            <Col className={styles.blogHeader__seperator2}></Col>
          </Row>
        </Container>
      </section>

      <section className={styles.blogWrapper}>
        <Container className={styles.blogList}>
          <SingleBlogCard slug="fixed-deposit" />
          <SingleBlogCard slug="fixed-currency" />
          <SingleBlogCard slug="investment-banking" />
        </Container>
      </section>
    </Layouts>
  );
};

export default blog;
