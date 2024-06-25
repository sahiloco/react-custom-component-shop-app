import PropTypes from "prop-types";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumb, className].join(" ")}>
      <div className={styles.breadcumb}>
        <img
          className={styles.regularhouseIcon}
          alt=""
          src="/regularhouse.svg"
        />
        <a className={styles.home}>Home</a>
        <div className={styles.regularcaretrightWrapper}>
          <img
            className={styles.regularcaretrightIcon}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shop}>Shopping Card</div>
        <div className={styles.regularcaretrightContainer}>
          <img
            className={styles.regularcaretrightIcon1}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shopGrid}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon2}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid1}>Electronics Devices</div>
        <img
          className={styles.regularcaretrightIcon3}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid2}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon4}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid3}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon5}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid4}>Track Order</div>
        <img
          className={styles.regularcaretrightIcon6}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.behicleAccessories}>Checkout</div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb;
