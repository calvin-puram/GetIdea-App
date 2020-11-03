import React, { useState } from 'react';
import Layouts from '@components/Layouts';
import styles from '@styles/Blog.module.css';
import { Nav, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaRegStar } from 'react-icons/fa';
import Image from 'next/image';

const SingleIdea = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layouts title="Business Idea">
      <section className={styles.blogHeader}>
        <Container>
          <Row>
            <Col lg="6" md="12" className={styles.blogHeader__seperator1}>
              <h2 className={styles.blogHeader__Header}>
                How To Become A Real Estate Agent
              </h2>
              <p className={styles.blogHeader__para}>
                19 Augs, 2019 - by Tommy Lang
              </p>
              {/*  modal */}
              <>
                <Button className={styles.rateIdeasBtn} onClick={handleShow}>
                  Rate this Idea
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>how would you rate this idea</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className={styles.rateModalBody}>
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className={styles.rateIdeasBtn}
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                    <Button
                      className={styles.rateIdeasBtn}
                      onClick={handleClose}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              {/* // modal end */}
            </Col>
            <Col className={styles.blogHeader__seperator2}></Col>
          </Row>
        </Container>
      </section>

      <section className={styles.blogContent}>
        <Container className={styles.blogContent__sub}>
          <h4 className={styles.blogContent__subHeader}>
            Undestanding The Business Process
          </h4>

          <p>
            Luxury is something everyone deserves from time to time. Such an
            indulgence can make a vacation a truly rejuvenating experience. One
            of the best ways to get the luxury of the rich and famous to fit
            into your budget can be yours through yacht charter companies. These
            companies specialize in creating custom sailing vacations that
            redefine travel.{' '}
          </p>

          <Image
            src="/img/business/realestate.jpg"
            alt="boutique shop"
            className={styles.blogContent__img}
            width="738px"
            height="350px"
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
            Evaluating The Real Estate Market
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
            Cost Implication Of Setting A Real Estate Agency
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

          <h4 className={styles.blogContent__subHeader}>
            Break Even Period And Growth Strategy
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

          <h4 className={styles.blogContent__subHeader}>
            Real Estate Revenue Policies And Share Index
          </h4>
          <Image
            src="/img/business/boutique.jpeg"
            alt="boutique shop"
            className={styles.blogContent__img}
            width="738px"
            height="350px"
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
        </Container>
      </section>
    </Layouts>
  );
};

export default SingleIdea;
