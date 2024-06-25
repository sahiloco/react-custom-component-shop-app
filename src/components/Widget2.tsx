import PropTypes from "prop-types";
import styles from "./Widget2.module.css";

const Widget2 = ({ className = "" }) => {
  return (
    <div className={[styles.widget, className].join(" ")}>
      <img
        className={styles.image5Icon}
        loading="lazy"
        alt=""
        src="/image-5@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.info}>
            <div className={styles.summerSales}>Summer Sales</div>
            <h2 className={styles.newGooglePixel}>New Google Pixel 6 Pro</h2>
          </div>
          <button className={styles.button}>
            <b className={styles.label}>Shop Now</b>
            <div className={styles.regulararrowrightWrapper}>
              <img
                className={styles.regulararrowrightIcon}
                alt=""
                src="/regulararrowright-2.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.badge}>
        <div className={styles.off}>29% OFF</div>
      </div>
    </div>
  );
};

Widget2.propTypes = {
  className: PropTypes.string,
};

export default Widget2;
