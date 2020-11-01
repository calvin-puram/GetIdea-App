import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';
import Link from 'next/link';
import HomeBackButton from '@components/HomeBackButton';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '@components/ValidationError';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required!'),
});

const login = () => {
  const onSubmit = (values) => console.log(values);
  return (
    <section className={styles.loginWrapper}>
      <Row>
        <Col className={styles.loginSeparator1}>
          <img src="/img/loginmatrix.png" alt="login" width="150px" />
          <HomeBackButton />
          <div className={styles.loginFormSubWrapper}>
            <div className={styles.logo__section}>
              <div className={styles.logo__title}>GetIdea</div>
              <img src="/img/logo.png" alt="logo" />
            </div>
            <p className={styles.loginPara}>
              Ok let’s fetch you ya’ login details
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form className={styles.loginForm}>
                    <div className={styles.loginForm__seperator}>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        className={styles.loginForm__input}
                      />
                      <ErrorMessage name="email" component={TextError} />
                    </div>

                    <div className={styles.registerForm__authRedirect}>
                      <Link href="/login" passHref>
                        <Nav.Link className={styles.RegisterForm__redirect}>
                          Already have an account? Back to <span>Login</span>?
                        </Nav.Link>
                      </Link>
                    </div>

                    <div className={styles.loginForm__seperator}>
                      <button
                        type="submit"
                        className={styles.loginForm__submit}
                      >
                        Proceed
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>

          <img
            src="/img/loginranbows.png"
            alt="login squares"
            className={styles.loginSeparator1Img}
          />
        </Col>
        <Col className={styles.loginSeparator2}>
          <div className={styles.loginSideWrapper}>
            <img src="/img/loginsideicon.png" alt="login icon" width="50px" />
            <p className={styles.loginSidePara}>
              Do you know getIdea is ranked #1 for the best business ideas
              platform? Hover aboard to discover you next step to getting your
              business venture.
            </p>
            <img src="/img/loginsideicon2.png" alt="login icon" width="50px" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default login;
