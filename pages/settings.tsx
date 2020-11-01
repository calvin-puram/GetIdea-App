import styles from '@styles/Settings.module.css';
import Layouts from '@components/Layouts';
import HomeBackButton from '@components/HomeBackButton';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardBackspace, MdCameraAlt } from 'react-icons/md';
import * as Yup from 'yup';
import TextError from '@components/ValidationError';
import { Form, Formik, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
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

const settings = () => {
  const onSubmit = (values) => console.log(values);
  return (
    <Layouts title="User Settings">
      <section className={styles.settingsWrapper}>
        <Link href="/" passHref>
          <Nav.Link className={styles.back__redirect}>
            <MdKeyboardBackspace className={styles.backButton} />{' '}
            <span>Back</span>
          </Nav.Link>
        </Link>

        <Container className={styles.settingsSubWrapper}>
          <Row>
            <Col className={styles.settings__user}>
              <h3 className={styles.settings__userHeader}>Settings</h3>
              <div className={styles.settingsPages}>
                <Link href="/settings" passHref>
                  <Nav.Link className={styles.settings__userSettings}>
                    Basic Information
                  </Nav.Link>
                </Link>
                <Link href="/announcement" passHref>
                  <Nav.Link className={styles.settings__userAnnouncement}>
                    Announcement
                  </Nav.Link>
                </Link>
              </div>

              <div className={styles.cameraWrapper}>
                <div className={styles.cameraWrapper__camera}>
                  <MdCameraAlt className={styles.cameraIcon} />
                </div>

                <p className={styles.camera__imageupload}>
                  Click to Upload image
                </p>
              </div>
              <hr />
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form className={styles.form__user}>
                      <h3 className={styles.settings__userSubHeader}>
                        Update Details
                      </h3>
                      <div className={styles.formInput__divider}>
                        <Field
                          type="text"
                          name="name"
                          placeholder="calvin puram"
                          className={styles.formInput__user}
                        />
                        <ErrorMessage name="name" component={TextError} />
                      </div>
                      <div className={styles.formInput__divider}>
                        <Field
                          type="text"
                          name="email"
                          placeholder="calvin.puram@gmail.com"
                          className={styles.formInput__user}
                        />
                        <ErrorMessage name="email" component={TextError} />
                      </div>

                      <button
                        type="submit"
                        className={styles.formInput__submit}
                      >
                        Save
                      </button>
                    </Form>
                  );
                }}
              </Formik>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form className={styles.form__user}>
                      <h3 className={styles.settings__userSubHeader}>
                        Update Password
                      </h3>
                      <div className={styles.formInput__divider}>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Current Password"
                          className={styles.formInput__user}
                        />
                        <ErrorMessage name="password" component={TextError} />
                      </div>
                      <div className={styles.formInput__divider}>
                        <Field
                          type="password"
                          name="password"
                          placeholder="New Password"
                          className={styles.formInput__user}
                        />
                        <ErrorMessage name="password" component={TextError} />
                      </div>
                      <div className={styles.formInput__divider}>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Confirm Password"
                          className={styles.formInput__user}
                        />
                        <ErrorMessage name="password" component={TextError} />
                      </div>

                      <button
                        type="submit"
                        className={styles.formInput__submit}
                      >
                        Update Password
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default settings;
