import Link from 'next/link';
import styles from '@styles/Ideas.module.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Rating from '@components/Rating';

const IdeasGridPage = () => {
  return (
    <Row>
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return (
          <Col className={styles.ideasSingleColumn} lg="4" key={item}>
            <Link href="/ideas/become-a-photographer">
              <a>
                <Rating
                  image="/img/business/photography.jpg"
                  title="Become A  Photographer"
                  access="Premium"
                />
              </a>
            </Link>
          </Col>
        );
      })}

      <div className={styles.MainPagination}>
        <span className={styles.MainPaginationItem1}>1</span>
        <span className={styles.MainPaginationItem2}>2</span>
        <span className={styles.MainPaginationItem3}>3</span>
        <span className={styles.MainPaginationItem4}>...</span>
        <span className={styles.MainPaginationNext}>next</span>
      </div>
    </Row>
  );
};

export default IdeasGridPage;
