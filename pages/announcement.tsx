import styles from '@styles/Announcement.module.css';
import Settingsstyles from '@styles/Settings.module.css';
import Layouts from '@components/Layouts';
import HomeBackButton from '@components/HomeBackButton';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardBackspace, MdCameraAlt } from 'react-icons/md';

const announcement = () => {
  return (
    <Layouts title="Announcement">
      <section className={styles.announcementWrapper}>
        <Link href="/" passHref>
          <Nav.Link className={styles.back__redirect}>
            <MdKeyboardBackspace className={styles.backButton} />{' '}
            <span>Back</span>
          </Nav.Link>
        </Link>

        <Container className={styles.announcementSubWrapper}>
          <h3 className={Settingsstyles.settings__userHeader}>Settings</h3>
          <div className={Settingsstyles.settingsPages}>
            <Link href="/settings" passHref>
              <Nav.Link className={Settingsstyles.settings__userSettings}>
                Basic Information
              </Nav.Link>
            </Link>
            <Link href="/announcement" passHref>
              <Nav.Link className={Settingsstyles.settings__userAnnouncement}>
                Announcement
              </Nav.Link>
            </Link>
          </div>

          <form className={styles.announcementForm}>
            <div className={styles.announcementForm__divider}>
              <p className={styles.announcementForm__para}>
                Weekly Newsletter Subscription
              </p>
              <input
                type="checkbox"
                checked
                className={styles.announcementForm__checkbox}
              />
            </div>
            <div className={styles.announcementForm__divider}>
              <p className={styles.announcementForm__para}>New Ideas</p>
              <input
                type="checkbox"
                checked
                className={styles.announcementForm__checkbox}
              />
            </div>
            <div className={styles.announcementForm__divider}>
              <p className={styles.announcementForm__para}>New Freebies</p>
              <input
                type="checkbox"
                checked
                className={styles.announcementForm__checkbox}
              />
            </div>
            <div className={styles.announcementForm__divider}>
              <p className={styles.announcementForm__para}>Promotions</p>
              <input
                type="checkbox"
                className={styles.announcementForm__checkbox}
              />
            </div>
            <input
              type="submit"
              value="Save Changes"
              className={styles.announcementForm__submit}
            />
          </form>
        </Container>
      </section>
    </Layouts>
  );
};

export default announcement;
