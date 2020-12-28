import React, { FC } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';
import Link from 'next/link';
import HomeBackButton from '@components/HomeBackButton';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '@components/ValidationError';
import Image from 'next/image';

interface MyLoginValues {
  email: string;
  password: string;
}

const initialValues: MyLoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(5, 'Password too short').required('Required!'),
});

const login: FC<{}> = () => {
  const onSubmit = (values: MyLoginValues) => console.log(values);
  return (
    <section className={styles.loginWrapper}>
      <Row>
        <Col className={styles.loginSeparator1}>
        <HomeBackButton />
          <Image
            src="/img/loginmatrix.png"
            alt="login"
            width="150px"
            height="65px"
          />
          
          <div className={styles.loginFormSubWrapper}>
            <div className={styles.logo__section}>
              <div className={styles.logo__title}>GetIdea</div>
              <Image
                src="/img/logo.png"
                alt="logo"
                width="35px"
                height="38px"
              />
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
                      <label htmlFor="email" className={styles.label}>
                        Email
                      </label>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        className={styles.loginForm__input}
                      />
                      {
                        //@ts-ignore
                        <ErrorMessage name="email" component={TextError} />
                      }
                    </div>
                    <div className={styles.loginForm__seperator}>
                      <label htmlFor="password" className={styles.label}>
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className={styles.loginForm__input}
                      />
                      {
                        //@ts-ignore
                        <ErrorMessage name="password" component={TextError} />
                      }
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
          <Image
            src="/img/loginranbows.png"
            alt="login squares"
            width="647px"
            height="136px"
            className={styles.loginSeparator1Img}
          />
        </Col>
        <Col className={styles.loginSeparator2}>
          <div className={styles.loginSideWrapper}>
            <Image
              src="/img/loginsideicon.png"
              alt="login icon"
              width="50px"
              height="45px"
            />

            <p className={styles.loginSidePara}>
              Our support team are always ready 24/7 to help you start and grow
              your business
            </p>
            <Image
              src="/img/loginsideicon2.png"
              alt="login icon"
              width="50px"
              height="25px"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default login;
