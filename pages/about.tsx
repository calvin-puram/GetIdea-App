import Layouts from '@components/Layouts';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/About.module.css';
import GlobalBtn from '@components/GlobalBtn';
import homeStyles from '@styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <Layouts title="About">
      <section className={styles.about}>
        <Container>
          <Row>
            <Col lg="6">
              <h2 className={styles.about__header}>
                We’re GetIdea A Business Ideas Platform From West Africa
              </h2>
              <p className={styles.about__para}>
                We are at your call. We serve you always.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.about__features}>
        <Row>
          <Col className={styles.about__featuresSeperator1}>
            <Image
              src="/img/aboutFeatures.png"
              alt="page curve"
              className={styles.about__featuresImg}
              width="500px"
              height="586px"
            />
          </Col>
          <Col className={styles.about__featuresSeperator2}>
            <h3 className={styles.about__featuresHeader}>
              <span>We’re a Team.</span>
              <span>We’re a Family.</span>
              <span>We’re GetIdea!</span>
            </h3>
            <p className={styles.about__featuresPara}>
              GetIdea provides progressive, and affordable business Idea
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>

            <div className={styles.about__featuresBtn}>
              <GlobalBtn tag="Say Hello" link="contact" />
            </div>
          </Col>
        </Row>
      </section>

      <section className={styles.aboutDetails}>
        <Container>
          <Row>
            <Col className={styles.aboutDetails__seperator1} lg="6" sm="12">
              <h3 className={styles.aboutDetails__header}>
                <span>Customer Insight,</span>
                <span>Professional Support</span>
              </h3>
              <p className={styles.aboutDetails__para}>
                GetIdea provides progressive, and affordable business Idea
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
              <Image
                src="/img/aboutDetails.png"
                alt="icons"
                className={styles.aboutDetails__img}
                width="360px"
                height="50px"
              />
            </Col>
            <Col lg="6" sm="12">
              <Image
                src="/img/aboutLogo.png"
                alt="large logo"
                className={styles.aboutDetails__logo}
                width="315px"
                height="346px"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.aboutBuild}>
        <Container>
          <Row>
            <Col className={styles.aboutBuild__seperator1}>
              <h3 className={styles.aboutBuild__Header}>
                Let’s Build Something Great Together
              </h3>
              <p className={styles.aboutBuild__para}>
                GetIdea is an online business Idea platform that
                deliversbusiness ideas, programs and resources for Individual,
              </p>
              <div className={styles.aboutBuild__btn}>
                <Link href="/" passHref>
                  <Nav.Link className={homeStyles.nav__btn}>
                    Let's Talk
                  </Nav.Link>
                </Link>
              </div>
            </Col>
            <Col className={styles.aboutBuild__seperator2}>
              <Image
                src="/img/aboutBuildImg.png"
                alt="about icons"
                className={styles.aboutBuild__icons}
                width="450px"
                height="200px"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default About;
