import PropTypes from "prop-types";
import styles from "./BottomNav.module.css";

const BottomNav = ({ className = "" }) => {
  return (
    <div className={[styles.bottomNav, className].join(" ")}>
      <div className={styles.leftSide}>
        <div className={styles.category}>
          <div className={styles.button}>
            <div className={styles.allCategory}>All Category</div>
            <div className={styles.regularcaretdownWrapper}>
              <img
                className={styles.regularcaretdownIcon}
                alt=""
                src="/regularcaretdown-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.trackOrderWrapper}>
          <div className={styles.trackOrder}>
            <img
              className={styles.regularmappinlineIcon}
              loading="lazy"
              alt=""
              src="/regularmappinline.svg"
            />
            <div className={styles.trackOrderContainer}>
              <div className={styles.trackOrder1}>Track Order</div>
            </div>
          </div>
        </div>
        <div className={styles.compareWrapper}>
          <div className={styles.compare}>
            <img
              className={styles.duotonearrowscounterclockwiseIcon}
              loading="lazy"
              alt=""
              src="/duotonearrowscounterclockwise.svg"
            />
            <div className={styles.compareContainer}>
              <a className={styles.compare1}>Compare</a>
            </div>
          </div>
        </div>
        <div className={styles.customerSupportWrapper}>
          <div className={styles.customerSupport}>
            <img
              className={styles.regularheadphonesIcon}
              loading="lazy"
              alt=""
              src="/regularheadphones.svg"
            />
            <div className={styles.customerSupportContainer}>
              <div className={styles.customerSupport1}>Customer Support</div>
            </div>
          </div>
        </div>
        <div className={styles.needHelpWrapper}>
          <div className={styles.needHelp}>
            <img
              className={styles.regularinfoIcon}
              loading="lazy"
              alt=""
              src="/regularinfo.svg"
            />
            <div className={styles.needHelpContainer}>
              <div className={styles.needHelp1}>Need Help</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.callNowWrapper}>
        <div className={styles.callNow}>
          <img
            className={styles.regularphonecallIcon}
            loading="lazy"
            alt=""
            src="/regularphonecall.svg"
          />
          <div className={styles.wrapper}>
            <div className={styles.div}>+1-202-555-0104</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BottomNav.propTypes = {
  className: PropTypes.string,
};

export default BottomNav;
