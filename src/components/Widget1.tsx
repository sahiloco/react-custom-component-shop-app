import PropTypes from "prop-types";
import styles from "./Widget1.module.css";

const Widget1 = ({ className = "" }) => {
  return (
    <div className={[styles.widget, className].join(" ")}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.xiaomiFlipbudsPro}>Xiaomi FlipBuds Pro</h2>
          <div className={styles.usd}>$299 USD</div>
        </div>
        <button className={styles.button}>
          <b className={styles.label}>Shop Now</b>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright-2.svg"
          />
        </button>
      </div>
    </div>
  );
};

Widget1.propTypes = {
  className: PropTypes.string,
};

export default Widget1;
