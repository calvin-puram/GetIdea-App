import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';
import Link from 'next/link';
import HomeBackButton from '@components/HomeBackButton';

const login = () => {
  return (
    <section className={styles.loginWrapper}>
      <Row>
        <Col className={styles.loginSeparator1}>
          <img src="/img/loginmatrix.png" alt="login" width="150px" />
          <HomeBackButton />
          <div className={styles.contributeFormSubWrapper}>
            <p className={styles.contributionHeader}>
              Get paid! sharing your knowledge
            </p>

            <form className={styles.contributeForm}>
              <p className={styles.loginPara}>
                A contributor’s account will be set up for you, meaning you will
                be listed on the official contributors’ page. Your profile can
                include free links to your website, Facebook, Twitter, LinkedIn,
                Google +, RSS, Pinterest etc. These links will be displayed on
                the Contributors’ page and under each article published by you.
              </p>
              <p className={styles.loginPara}>
                Ideas must be 100% original content, meaning it has never been,
                nor ever will be, published anywhere else.
              </p>
              <p className={styles.loginPara}>
                The copyright remains with the Contributor. We will credit your
                work and promote your profile through our website and social
                media.
              </p>
              <p className={styles.loginPara}>
                You can always decide to not contribute anymore. That’s alright.
                Once you make this decision we will remove your account however
                every ideas you have written will still be display on our
                platform .
              </p>
              <p className={styles.loginPara}>
                You can always decide to not contribute anymore. That’s alright.
                Once you make this decision we will remove your account however
                every ideas you have written will still be display on our
                platform .
              </p>
              <p className={styles.loginPara}>
                You will be required to provide the draft of your idea. We will
                do our best to review, adjust, proof read, add image and publish
                it as soon as possible. There may be a case when we delay
                publishing of your content due to contextual reasons.
              </p>

              <p className={styles.termsPara}>
                If you are happy with our terms please:
              </p>

              <div className={styles.contributorForm__seperator}>
                <input
                  type="submit"
                  value="Become A Contributor"
                  className={styles.contributorForm__submit}
                />
              </div>
            </form>
          </div>

          <img
            src="/img/loginranbows.png"
            alt="login squares"
            className={styles.contriSeparator1Img}
          />
        </Col>
        <Col className={styles.contributeSeparator2}></Col>
      </Row>
    </section>
  );
};

export default login;
