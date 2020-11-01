import styles from '@styles/Footer.module.css';
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        {/* footer section 1  */}
        <div className={styles.footer__socials}>
          <img src="/img/logo.png" alt="logo" width="50px" />
          <p className={styles.footer__socials__content}>
            GetIdea is an online Business Idea platform that delivers Business
            Ideas, programs and resources.
          </p>
          <div className={styles.footer__socials_icons}>
            <a href="" className={styles.icons}>
              <FaFacebookSquare />
            </a>

            <a href="#" className={styles.icons}>
              <FaTwitter />
            </a>

            <a href="#" className={styles.icons}>
              <FaInstagram />
            </a>

            <a href="#" className={styles.icons}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* footer section 2  */}
        <div className={styles.footer__quicklinks}>
          <ul>
            <li className={styles.quicklinks}>QuickLinks</li>
            <li>
              <Link href="/" className={styles.list__link}>
                <a className={styles.list__linkText}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.list__link}>
                <a className={styles.list__linkText}>Ideas</a>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.list__link}>
                <a className={styles.list__linkText}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.list__link}>
                <a className={styles.list__linkText}>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.list__link}>
                <a className={styles.list__linkText}>Become a Contributor</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* footer section 3  */}
        <div className={styles.footer__contact}>
          <ul>
            <li className={styles.contact}> Contact Us</li>
            <li className={styles.contact__listItem}>090 232355 2323</li>
            <li className={styles.contact__listItem}>info@getIdea.com</li>
            <li className={styles.contact__listItem}>
              12, atiba street Ibadan
            </li>
          </ul>
        </div>

        {/* footer section 4  */}
        <div className={styles.terms}>
          <ul>
            <li>
              <Link href="/" className={styles.terms__listLink}>
                <a className={styles.list__linkText}>Terms and Condition</a>
              </Link>
            </li>
            <li>
              <Link href="/faq" className={styles.terms__listLink}>
                <a className={styles.list__linkText}>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__notes}>
        <small className={styles.notes}>
          All Right Reserved | GetIdea
          <span> {new Date().getFullYear()}</span>
        </small>
        <small>
          <Link href="/privacy" className={styles.privacy}>
            <a className={styles.list__linkText}>
              <span className={styles.privacy_space}>Privacy Policy</span>
            </a>
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
