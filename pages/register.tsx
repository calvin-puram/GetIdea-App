import React, { FC } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Auth.module.css';
import Link from 'next/link';
import HomeBackButton from '@components/HomeBackButton';
import * as Yup from 'yup';
import TextError from '@components/ValidationError';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Image from 'next/image';

interface MyRegValues {
  email: string;
  password: string;
  name: string;
  password2: string;
}

const initialValues: MyRegValues = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(5, 'Password too short').required('Required!'),
  password2: Yup.string().min(5, 'Password too short').required('Required!'),
});

const register: FC<{}> = () => {
  const onSubmit = (values: MyRegValues) => console.log(values);
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

          <div className={styles.registerFormSubWrapper}>
            <div className={styles.logo__section}>
              <div className={styles.logo__title}>GetIdea</div>
              <Image
                src="/img/logo.png"
                alt="logo"
                width="35px"
                height="38px"
              />
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
                      <label htmlFor="name" className={styles.label}>
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className={styles.loginForm__input}
                      />
                      {
                        //@ts-ignore
                        <ErrorMessage name="name" component={TextError} />
                      }
                    </div>
                    <div className={styles.loginForm__seperator}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
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
                    <div className={styles.loginForm__seperator}>
                      <label htmlFor="password2" className={styles.label}>
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        name="password2"
                        id="password2"
                        className={styles.loginForm__input}
                      />
                      {
                        //@ts-ignore
                        <ErrorMessage name="password2" component={TextError} />
                      }
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
              Do you know you can also become a contributor and earn side cash?
              It’s easy! create an account to unlock a milestone.
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

export default register;
