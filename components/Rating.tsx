import styles from '@styles/Home.module.css';
import { FaRegStar } from 'react-icons/fa';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {OverlayTrigger, Tooltip  } from 'react-bootstrap';
import Link from 'next/link'

const Rating = ({ image, title, access }) => {
  
  return (
    <>
      <div className="business__card">
        <p className={styles.business__access}>{access}</p>
        <img src={image} alt="fish" className={styles.businessImg} />
        <div className={styles.business__footerCard}>
          <div className={styles.business__footerCard__titleWrapper}>
            <Link href="/ideas/become-an-auto-specialist">
              <a className={styles.business__footerCard__title}>
                {title}
              </a>
            </Link>
            
            <>
              {[ 'bottom'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Add to favorite
                    </Tooltip>
                  }
                >
                  <MdFavorite className={styles.business__footerCard__favorite} />
                </OverlayTrigger>
              ))}
            </>
            
          </div>
          <div className={styles.business__rating}>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
