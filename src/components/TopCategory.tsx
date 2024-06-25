import PropTypes from "prop-types";
import styles from "./TopCategory.module.css";

const TopCategory = ({ className = "" }) => {
  return (
    <div className={[styles.topCategory, className].join(" ")}>
      <div className={styles.topCategory1}>Top Category</div>
      <div className={styles.item}>
        <div className={styles.footerLinks}>
          <div className={styles.electronics}>{`Computer & Laptop`}</div>
        </div>
        <div className={styles.footerLinks1}>
          <div className={styles.electronics1}>SmartPhone</div>
        </div>
        <div className={styles.footerLinks2}>
          <a className={styles.electronics2}>Headphone</a>
        </div>
        <div className={styles.footerLinks3}>
          <div className={styles.electronicsLinkSetSeven}>
            <div className={styles.devider} />
          </div>
          <div className={styles.electronics3}>Accessories</div>
        </div>
        <div className={styles.footerLinks4}>
          <div className={styles.electronics4}>{`Camera & Photo`}</div>
        </div>
        <div className={styles.footerLinks5}>
          <div className={styles.electronics5}>{`TV & Homes`}</div>
        </div>
        <div className={styles.button}>
          <div className={styles.browseAllProduct}>Browse All Product</div>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright-12.svg"
          />
        </div>
      </div>
    </div>
  );
};

TopCategory.propTypes = {
  className: PropTypes.string,
};

export default TopCategory;
