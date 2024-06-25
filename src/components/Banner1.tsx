import PropTypes from "prop-types";
import styles from "./Banner1.module.css";

const Banner1 = ({ className = "" }) => {
  return (
    <div className={[styles.banner, className].join(" ")}>
      <div className={styles.xiaomiWrapper}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.heading}>
              <div className={styles.badge}>
                <div className={styles.hot}>INTRODUCING NEW</div>
              </div>
              <div className={styles.xiaomiMi11Container}>
                <p className={styles.xiaomiMi11}>Xiaomi Mi 11 Ultra</p>
                <p className={styles.gb256gb}>12GB+256GB</p>
              </div>
            </div>
            <div className={styles.dataProvidedBy}>
              *Data provided by internal laboratories. Industry measurment.
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.label}>Shop now</b>
            <img
              className={styles.regulararrowrightIcon}
              alt=""
              src="/regulararrowright-5.svg"
            />
          </button>
        </div>
      </div>
      <div className={styles.xiaomiImageContainer}>
        <img className={styles.imageIcon} alt="" src="/image-16@2x.png" />
        <div className={styles.discount}>
          <div className={styles.percent}>$590</div>
        </div>
      </div>
    </div>
  );
};

Banner1.propTypes = {
  className: PropTypes.string,
};

export default Banner1;
