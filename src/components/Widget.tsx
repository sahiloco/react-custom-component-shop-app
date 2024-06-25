import PropTypes from "prop-types";
import styles from "./Widget.module.css";

const Widget = ({ className = "" }) => {
  return (
    <header className={[styles.widget, className].join(" ")}>
      <img
        className={styles.blackIcon}
        loading="lazy"
        alt=""
        src="/black1@2x.png"
      />
      <div className={styles.fridayWrapper}>
        <a className={styles.friday}>Friday</a>
      </div>
      <div className={styles.discountWrapper}>
        <nav className={styles.discount}>
          <div className={styles.upToWrapper}>
            <a className={styles.upTo}>Up to</a>
          </div>
          <a className={styles.percentSign}>59%</a>
          <div className={styles.offWrapper}>
            <a className={styles.off}>OFF</a>
          </div>
        </nav>
      </div>
      <button className={styles.button}>
        <a className={styles.label}>Shop now</a>
        <div className={styles.regulararrowrightWrapper}>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright.svg"
          />
        </div>
      </button>
      <div className={styles.closeButtonWrapper}>
        <div className={styles.closeButton}>
          <img className={styles.duotonexIcon} alt="" src="/duotonex.svg" />
        </div>
      </div>
    </header>
  );
};

Widget.propTypes = {
  className: PropTypes.string,
};

export default Widget;
