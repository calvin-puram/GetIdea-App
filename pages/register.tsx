import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';
import Link from 'next/link';
import HomeBackButton from '@components/HomeBackButton';
import * as Yup from 'yup';
import TextError from '@components/ValidationError';
import { Form, Formik, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(5, 'Password too short').required('Required!'),
  confirmPassword: Yup.string()
    .min(5, 'Password too short')
    .required('Required!'),
});

const register = () => {
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
            <p className={styles.loginPara}>Please create a new account here</p>

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
                        name="name"
                        placeholder="Full Name"
                        className={styles.loginForm__input}
                      />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className={styles.loginForm__seperator}>
                      <Field
                        type="email"
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
                        placeholder="password"
                        className={styles.loginForm__input}
                      />
                      <ErrorMessage name="password" component={TextError} />
                    </div>
                    <div className={styles.loginForm__seperator}>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className={styles.loginForm__input}
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component={TextError}
                      />
                    </div>

                    <div className={styles.registerForm__authRedirect}>
                      <Link href="/login" passHref>
                        <Nav.Link className={styles.RegisterForm__redirect}>
                          Already have an account? <span>Login</span>?
                        </Nav.Link>
                      </Link>
                    </div>

                    <div className={styles.loginForm__seperator}>
                      <button
                        type="submit"
                        className={styles.loginForm__submit}
                      >
                        Register
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
              Do you know you can also become a contributor and earn side cash?
              It’s easy! create an account to unlock a milestone.
            </p>
            <img src="/img/loginsideicon2.png" alt="login icon" width="50px" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default register;
