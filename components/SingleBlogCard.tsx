import { FC } from 'react';
import styles from '../styles/Blog.module.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import homeStyles from '@styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

type CardSingleProp = {
  slug?: string;
};

const SingleBlogCard: FC<CardSingleProp> = ({ slug }) => {
  return (
    <div className={styles.blogCard}>
      <Image
        src="/img/business/money.jpg"
        alt="different currencies"
        width="509"
        height="339"
      />

      <div className={styles.blogCard__content}>
        <Container>
          <h4 className={styles.blogCard__contentHeader}>
            Fixed Deposit And Treasury Bills In Nigeria; Which One Is The Best?
          </h4>
          <p className={styles.blogCard__contentPara}>
            19 Augs, 2019 - by Tommy Lang
          </p>
          <p className={styles.blogCard__contentIntro}>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur,{' '}
          </p>

          <div className={styles.aboutBuild__btn}>
            <Link href={`/blog/${slug}`} passHref>
              <Nav.Link className={homeStyles.nav__btn}>Read More</Nav.Link>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleBlogCard;
