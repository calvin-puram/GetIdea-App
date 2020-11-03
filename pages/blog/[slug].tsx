import Layouts from '@components/Layouts';
import styles from '@styles/Blog.module.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const SingleBlog = () => {
  return (
    <Layouts title="slug">
      <section className={styles.blogHeader}>
        <Container>
          <Row>
            <Col lg="6" md="12" className={styles.blogHeader__seperator1}>
              <h2 className={styles.blogHeader__Header}>
                How To Have A Good Music LIstening Ear
              </h2>
              <p className={styles.blogHeader__para}>
                19 Augs, 2019 - by Tommy Lang
              </p>
            </Col>
            <Col className={styles.blogHeader__seperator2}></Col>
          </Row>
        </Container>
      </section>

      <section className={styles.blogContent}>
        <Container className={styles.blogContent__sub}>
          <p>
            Luxury is something everyone deserves from time to time. Such an
            indulgence can make a vacation a truly rejuvenating experience. One
            of the best ways to get the luxury of the rich and famous to fit
            into your budget can be yours through yacht charter companies. These
            companies specialize in creating custom sailing vacations that
            redefine travel.{' '}
          </p>
          <Image
            src="/img/business/boutique.jpeg"
            alt="boutique shop"
            className={styles.blogContent__img}
            width="738px"
            height="415px"
          />

          <p>
            With your budget in mind, it is easy to plan a chartered yacht
            vacation. Companies often have a fleet of sailing vessels that can
            accommodate parties of various sizes. You may want to make it a more
            intimate trip with only close family. There are charters that can be
            rented for as few as two people. These include either a sailboat or
            motorboat and can come with or without a crew and captain to sail
            the ship for you. If you choose not to hire a crew, you will have to
            show that you are knowledgeable of sailing and can handle the ship
            competently.
          </p>

          <h4 className={styles.blogContent__subHeader}>
            Planning Your Luxury Trip{' '}
          </h4>

          <p>
            The next part of planning is to determine your starting and ending
            ports. This could be a place close to home and sail in one area or
            start and finish at two different ports. Generally, starting and
            stopping in the same port will save you money and is usually more
            convenient. You can also fly to a destination far from home and then
            sail another exotic sea. There are luxury yacht charter companies
            that cruise the Caribbean and Mediterranean seas or around Alaska,
            the Panama Canal, or anyplace you can imagine.
          </p>

          <p>
            Determining the type of cruise is another aspect of planning a
            chartered yachting trip. You can have as little or many crew members
            as the ship will hold. A captain takes all the worries out of
            navigating and onboard housekeeping services make it a real vacation
            that rivals the finest hotel services. You can also choose to have a
            chef and service crew as part of your vacation package.
          </p>

          <h4 className={styles.blogContent__subHeader}>
            Another Sub-heading Information will be a perfect fit here.
          </h4>

          <p>
            Luxury is something everyone deserves from time to time. Such an
            indulgence can make a vacation a truly rejuvenating experience. One
            of the best ways to get the luxury of the rich and famous to fit
            into your budget can be yours through yacht charter companies. These
            companies specialize in creating custom sailing vacations that
            redefine travel.{' '}
          </p>

          <p>
            With your budget in mind, it is easy to plan a chartered yacht
            vacation. Companies often have a fleet of sailing vessels that can
            accommodate parties of various sizes. You may want to make it a more
            intimate trip with only close family. There are charters that can be
            rented for as few as two people.
          </p>

          <p>
            Luxury is something everyone deserves from time to time. Such an
            indulgence can make a vacation a truly rejuvenating experience. One
            of the best ways to get the luxury of the rich and famous to fit
            into your budget can be yours through yacht charter companies. These
            companies specialize in creating custom sailing vacations that
            redefine travel.{' '}
          </p>

          <p>Tags: Technology, Design, Computer</p>
        </Container>
      </section>
    </Layouts>
  );
};

export default SingleBlog;
