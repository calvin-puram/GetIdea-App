import React, { useState } from 'react';
import Link from 'next/link';
import HomeStyles from '@styles/Home.module.css';
import styles from '@styles/Ideas.module.css';
import Layouts from '@components/Layouts';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { FaSearch, FaGripHorizontal } from 'react-icons/fa';
import { MdFormatListBulleted } from 'react-icons/md';
import Rating from '@components/Rating';
import IdeasGridPage from '@components/IdeasGridPage';
import Image from 'next/image';

const Ideas = () => {
  const [grid, setGrid] = useState(true);

  return (
    <Layouts title="Business Ideas">
      <header className={HomeStyles.header}>
        <Container fluid>
          <Row>
            <div className={HomeStyles.hero__section}>
              {/* first content */}
              <Col lg="6" className={HomeStyles.hero__section__content}>
                <h1 className={HomeStyles.hero__content_title}>
                  Browse Thousands of Our Business Ideas Curated Only for you.
                </h1>
                <p className={HomeStyles.hero__content__para}>
                  Access all business Ideas and resources when you become a
                  premium member of GetIdea.
                </p>
              </Col>
              {/* second content */}
              <Col className="d-none d-md-flex ">
                <Image
                  src="/img/icon.png"
                  alt="icons"
                  className={styles.hero__section__img}
                  width="500px"
                  height="550px"
                />
              </Col>
            </div>
          </Row>
        </Container>
      </header>

      <section className={styles.searchIdeas}>
        <Container>
          <Row>
            <Col lg="12" className={styles.searchFormWrapper}>
              <form className={styles.searchForm}>
                <div className={styles.searchForm__group}>
                  <FaSearch className={styles.searchForm__inputIcon} />
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search for Business Idea e.g snail farming"
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.ideasList}>
        <Container>
          <Row className={styles.ideasWrapperAll}>
            <Col lg="9" className={styles.idealistFirst}>
              {/* first */}
              <div className={styles.ideasPaginate__first}>
                <p className={styles.ideasPaginateShowing}>
                  Showing 1–8 of 10 results
                </p>
                <p className={styles.ideasPaginateShowing}>Show 6 12 16</p>
              </div>

              {/* second */}
              <div className={styles.idealistgrid}>
                <div className={styles.ideasPaginate__toggle}>
                  <MdFormatListBulleted
                    className={styles.ideasPaginate__toggleIcons1}
                    onClick={() => setGrid(false)}
                  />
                  <FaGripHorizontal
                    className={styles.ideasPaginate__toggleIcons2}
                    onClick={() => setGrid(true)}
                  />
                </div>

                <div className={styles.ideasPaginate__select}>
                  <select className={styles.ideasPaginate__select1}>
                    <option value="filter">filter</option>
                    <option value="select">select</option>
                    <option value="select">select</option>
                  </select>

                  <select className={styles.ideasPaginate__select2}>
                    <option value="sort">sort</option>
                    <option value="select">select</option>
                    <option value="select">select</option>
                  </select>
                </div>
              </div>
            </Col>

            <Col lg="3" className={styles.ideasCategories}>
              <h4 className={styles.ideasCategories__Header}>All Ideas</h4>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.ideasgrid}>
        <Container>
          <Row className={styles.ideasGridWrapperAll}>
            <Col lg="9" className={styles.ideascolumn}>
              {/* set ideas to list */}
              {!grid &&
                [1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <Col
                      className={styles.ideasSingleColumn}
                      lg="12"
                      key={item}
                    >
                      <Link href="/ideas/become-a-photographer">
                        <a>
                          <Rating
                            image="/img/business/photography.jpg"
                            title="Become A  Photographer"
                            access="Premium"
                            ideasPage="true"
                          />
                        </a>
                      </Link>
                    </Col>
                  );
                })}
              {/* set ideas to grid */}
              {grid && <IdeasGridPage />}
            </Col>

            <Col lg="3" className={styles.ideasgridCategories}>
              <div>
                <p className={styles.ideasgridCategories__para}>
                  Information Technology (2908)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Agriculture (11293)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Services (2230)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Building/Real Estate (9828)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Oil and Gas (8223)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Utilities (1001)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Health Care (734)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Sound & Music (1223)
                </p>
                <p className={styles.ideasgridCategories__para}>
                  Consumer Goods (382)
                </p>
              </div>

              <h4 className={styles.ideasgridCategoriesType}>Idea Type</h4>
              <div className="mt-3">
                <span className={styles.ideasgridCategoriesTypeFree}>Free</span>
                <span className={styles.ideasgridCategoriesPaid}>Paid</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default Ideas;
