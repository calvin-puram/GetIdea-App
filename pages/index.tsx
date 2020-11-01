import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/Home.module.css';
import Layouts from '@components/Layouts';
import GlobalBtn from '@components/GlobalBtn';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { FaRegStar } from 'react-icons/fa';
import Rating from '@components/Rating';

export default function Home() {
  return (
    <Layouts title="Home">
      <header className={styles.header}>
        <Container fluid>
          <Row>
            <div className={styles.hero__section}>
              {/* first content */}
              <Col lg="6" className={styles.hero__section__content}>
                <h1 className={styles.hero__content_title}>
                  Get Access to Unlimited Business Ideas. Everywhere, Everytime!
                </h1>
                <p className={styles.hero__content__para}>
                  We connect entreprenuers with knowledge, support, programs,
                  business ideas and investors they need to succeed.
                </p>
                <Link href="/" passHref>
                  <Nav.Link className={styles.nav__btn}>Get Access</Nav.Link>
                </Link>
              </Col>
              {/* second content */}
              <Col className="d-none d-md-flex ">
                <img
                  src="/img/icon.png"
                  alt="icons"
                  className={styles.hero__section__img}
                />
              </Col>
            </div>
          </Row>
        </Container>
      </header>

      <main>
        <section className={styles.features}>
          <Container>
            <Row>
              <Col className={styles.features__icons} sm="12" md="4">
                <img src="/img/icon3.png" alt="web icon" />
                <h3 className={styles.featuresHeader}>Unlimited Access</h3>
                <p className={styles.featuresPara}>
                  Monthly subscription unlimited access
                </p>
              </Col>
              <Col className={styles.features__icons} sm="12" md="4">
                <img src="/img/icon2.png" alt="web icon" />
                <h3 className={styles.featuresHeader}>Extensive Coverage</h3>
                <p className={styles.featuresPara}>
                  Stay up to date with access to reference business Ideas
                </p>
              </Col>
              <Col className={styles.features__icons} sm="12" md="4">
                <img src="/img/icon1.png" alt="web icon" />
                <h3 className={styles.featuresHeader}>Anytime, anywhere</h3>
                <p className={styles.featuresPara}>
                  Switch between your computer, tablet, or mobile device.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.features__2}>
          <Container>
            <Row>
              <Col md="6" sm="12">
                <img
                  src="/img/idea.png"
                  alt="light bulb"
                  className={styles.features__img}
                />
              </Col>
              <Col className={styles.features__2__content} md="6" sm="12">
                <h3 className="mb-3">Leading Business Idea Platform</h3>
                <p className="my-4">
                  GetIdea provides progressive, and affordable business Idea
                  accessible on mobile and online for everyone. To us, it’s not
                  just work. We take pride in the solutions we deliver
                </p>
                <GlobalBtn tag="Discover" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.brake}>
          <Container>
            <div className="py-5 text-center">
              <h2 className={styles.brake__header}>
                The online platform for ...
              </h2>
            </div>

            <Row>
              <Col md="4" sm="12" className="my-sm-5">
                <div className="d-none d-md-flex">
                  <img
                    src="/img/brake1.png"
                    alt="startup"
                    className={styles.brakeImg}
                  />
                </div>
                <div className={styles.brake__card}>
                  <div className="card p-3 text-center">
                    <h4 className={styles.brake__card__title}>
                      All Income Ideas
                    </h4>
                    <p>
                      You can have access to business ideas, resources in this
                      platform
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="12" className="my-sm-5">
                <div className="d-none d-md-flex">
                  <img
                    src="/img/brake2.png"
                    alt="startup"
                    className={styles.brakeImg}
                  />
                </div>
                <div className={styles.brake__card}>
                  <div className="card p-3 text-center">
                    <h4 className={styles.brake__card__title}>
                      {' '}
                      startup entrepreneurs
                    </h4>
                    <p>
                      We support all startup entrepreneurs with resources to
                      grow their business
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="12" className="my-sm-5">
                <div className="d-none d-md-flex">
                  <img
                    src="/img/brake3.png"
                    alt="startup"
                    className={styles.brakeImg}
                  />
                </div>
                <div className={styles.brake__card}>
                  <div className="card p-3 text-center">
                    <h4 className={styles.brake__card__title}>
                      Mentors and Investors
                    </h4>
                    <p>
                      Mentors and Investors can contribute to the getIdea
                      platform
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.business}>
          <Container>
            <div className="py-5 text-center">
              <h2 className={styles.business__header}>Business Ideas</h2>
            </div>
            <Row>
              <Col
                className={styles.business__ideas__display}
                md="4"
                lg="3"
                sm="12"
              >
                
                    <Rating
                      image="/img/business/fish.jpg"
                      title="Become A Fish Farmer"
                      access="Free"
                    />
                  
              </Col>
              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
               
                    <Rating
                      image="/img/business/photography.jpg"
                      title="Become A  Photographer"
                      access="Premium"
                    />
                  
              </Col>
              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
                
                    <Rating
                      image="/img/business/auto.jpg"
                      title="Become An Auto  Specialist"
                      access="Premium"
                    />
                  
              </Col>
              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
               
                    <Rating
                      image="/img/business/boutique.jpeg"
                      title="Setup A Boutique Business"
                      access="Premium"
                    />
                  
              </Col>

              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
                
                    <Rating
                      image="/img/business/auto.jpg"
                      title="Become An Auto  Specialist"
                      access="Premium"
                    />
                  
              </Col>
              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
                
                    <Rating
                      image="/img/business/boutique.jpeg"
                      title="Setup A Boutique Business"
                      access="Premium"
                    />
                 
              </Col>
              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
                
                    <Rating
                      image="/img/business/photography.jpg"
                      title="Become A  Photographer"
                      access="Premium"
                    />
                  
              </Col>
              <Col
                md="4"
                lg="3"
                sm="12"
                className={styles.business__ideas__display}
              >
                
                    <Rating
                      image="/img/business/photography.jpg"
                      title="Become A  Photographer"
                      access="Premium"
                    />
                  
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.pricing}>
          <div className={styles.pricing__contentWrapper}>
            <div>
              <img
                src="/img/curve.png"
                alt="curve"
                className={styles.pricing__img}
              />
              <div className={styles.pricing__content}>
                <h3 className={styles.pricing__header}>Our Pricing Plans</h3>
                <p className={styles.pricing__para}>
                  GetIdea is an online business platform that delivers business
                  ideas and resources for everyone{' '}
                </p>
                <div>
                  <GlobalBtn tag="Subscribe" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pricing__cardSeperator}>
            <div>
              <div className={styles.pricing__cards}>
                <div className={styles.pricing__card}>
                  <h4 className={styles.pricing__cardHeader}>Premium</h4>
                  <div className={styles.pricing__amount}>
                    <p className={styles.pricing__cardMoneySign}>$</p>
                    <h2 className={styles.price__cardPrice}>15</h2>
                    <p className={styles.pricing__cardDate}>/Monthly</p>
                  </div>
                  <p className={styles.pricing__cardPara}>
                    GetIdea is an online business platform that delivers
                    business ideas and resources for
                  </p>
                  <div className={styles.pricing__cardWrapper}>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>Unlimited access</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>Offline Accessibility</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>24/7 Supports</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>Jobs Opportunity</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>2.0% Transaction Fee</p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/img/pricing_card_rect.png"
                      alt="pricing card"
                      className={styles.pricing__cardRect}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.pricing__cards}>
                <div className={styles.pricing__card}>
                  <h4 className={styles.pricing__cardHeader}>Premium</h4>
                  <div className={styles.pricing__amount}>
                    <p className={styles.pricing__cardMoneySign}>$</p>
                    <h2 className={styles.price__cardPrice}>120</h2>
                    <p className={styles.pricing__cardDate}>/Annual</p>
                  </div>
                  <p className={styles.pricing__cardPara}>
                    GetIdea is an online business platform that delivers
                    business ideas and resources for
                  </p>
                  <div className={styles.pricing__cardWrapper}>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>Unlimited access</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>Offline Accessibility</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>24/7 Supports</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>Jobs Opportunity</p>
                    </div>
                    <div className={styles.pricing__cardItemsList}>
                      <img src="/img/checkIcon.png" alt="check icon" />
                      <p>2.0% Transaction Fee</p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/img/pricing_card_rect.png"
                      alt="pricing card"
                      className={styles.pricing__cardRect}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.build}>
          <Container className={styles.buildWrapper}>
            <div className={styles.buildSeperator1}>
              <div className={styles.build__img}>
                <img
                  src="/img/buildpac.png"
                  alt="rectangle"
                  className={styles.buildImgSecondary}
                />
              </div>
            </div>

            <div className={styles.buildSeperator2}>
              <h3 className={styles.buildHeader}>
                Let’s Build Something Great Together
              </h3>
              <p className={styles.buildpara}>
                GetIdea provides progressive, and affordable business Idea
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
              <GlobalBtn tag="Let's Talk" />
            </div>
          </Container>
        </section>

        <section className={styles.newsletter}>
          <Container>
            <Row>
              <Col lg="6" md="12">
                <h3 className={styles.newsletterHeader}>
                  Subscribe to Our Newsletter
                </h3>
                <p className={styles.newsletterPara}>
                  Get exclusive discounts and latest news deliverd to your inbox
                  for free!
                </p>
              </Col>
              <Col lg="6" md="12">
                <form className={styles.newsletterForm}>
                  <input
                    type="text"
                    placeholder="email"
                    className={styles.newsletterEmail}
                  />
                  <input
                    type="submit"
                    value="submit"
                    className={styles.newsletterSubmit}
                  />
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Layouts>
  );
}
