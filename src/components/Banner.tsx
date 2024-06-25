import { useState, useCallback } from "react";
import Popup from "./Popup";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = ({ className = "" }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.banner, className].join(" ")}>
        <div className={styles.macbookWrapper}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.discount}>
                <div className={styles.saveUpTo}>SAVE UP TO $300.00</div>
              </div>
              <h1 className={styles.macbookPro}>Macbook Pro</h1>
            </div>
            <h2 className={styles.appleM3Max}>
              Apple M3 Max Chip. 8GB Unified Memory, 256GB SSD Storage, Space
              Grey
            </h2>
            <button className={styles.button} onClick={openPopup}>
              <b className={styles.label}>Shop now</b>
              <img
                className={styles.regulararrowrightIcon}
                alt=""
                src="/regulararrowright-7.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.macbookImageContainer}>
          <img className={styles.imageIcon} alt="" src="/image-17@2x.png" />
          <div className={styles.discount1}>
            <div className={styles.percentage}>$1999</div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Popup onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
