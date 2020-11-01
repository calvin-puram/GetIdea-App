import Layouts from '@components/Layouts'
import styles from '@styles/Contact.module.css';
import {Nav, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Layouts title="Contact">
      <section className={styles.contact}>
        <Container>
          <Row>
            <Col className={styles.contact__MainSeperator1} lg="6" sm="12">
              <h2 className={styles.contact__Header}>24Hrs On Deck Customer Support </h2>
              <p className={styles.contact__mainPara}>We are at your call. We serve you always.</p>
            </Col>
            <Col className={styles.contact__MainSeperator2}></Col>
          </Row>
        </Container>
      </section>

      <section className={styles.contact__form}>
        <Container>
         <div className={styles.contactForm__Wrapper} >
            <h3 className={styles.contactFormHeader}>Let's Talk</h3>
            <p className={styles.contactFormPara}>We do noramlly get back within 48hrs. Please leave a message.</p>
           <form className={styles.contactForm}>
              <div className={styles.contact__inputWrapper}>
                <input type="text" placeholder="name" className={styles.contact__formInput}/>
              </div>
              <div className={styles.contact__inputWrapper}>
                <input type="text" placeholder="country/region" className={styles.contact__formInput}/>
              </div>
              <div className={styles.contact__inputWrapper}>
                <input type="text" placeholder="city" className={styles.contact__formInput}/>
              </div>
              <div className={styles.contact__inputWrapper}>
                <textarea  placeholder="your message" className={styles.contactMessage}></textarea>
              </div>
              <input type="submit" value="Send Message" className={styles.contact__formsubmit}/>
           </form>
         </div>
        </Container>
      </section>
    </Layouts>
  )
}

export default Contact
