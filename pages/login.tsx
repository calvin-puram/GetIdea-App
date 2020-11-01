import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';
import Link from 'next/link';
import HomeBackButton from '@components/HomeBackButton';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '@components/ValidationError';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(5, 'Password too short').required('Required!'),
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
              Sign in to your account to continue
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
                    <div className={styles.loginForm__seperator}>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={styles.loginForm__input}
                      />
                      <ErrorMessage name="password" component={TextError} />
                    </div>

                    <div className={styles.loginForm__authRedirect}>
                      <Link href="/forgot-password" passHref>
                        <Nav.Link className={styles.loginForm__redirect}>
                          Forgot Password?
                        </Nav.Link>
                      </Link>

                      <Link href="/register" passHref>
                        <Nav.Link className={styles.loginForm__redirect}>
                          Don’t have an account <span>Register</span>?
                        </Nav.Link>
                      </Link>
                    </div>

                    <div className={styles.loginForm__seperator}>
                      <button
                        type="submit"
                        className={styles.loginForm__submit}
                      >
                        Login
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
              Our support team are always ready 24/7 to help you start and grow
              your business
            </p>
            <img src="/img/loginsideicon2.png" alt="login icon" width="50px" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default login;
