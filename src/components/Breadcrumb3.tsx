import PropTypes from "prop-types";
import styles from "./Breadcrumb3.module.css";

const Breadcrumb3 = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumb, className].join(" ")}>
      <div className={styles.breadcumb}>
        <img
          className={styles.regularhouseIcon}
          alt=""
          src="/regularhouse.svg"
        />
        <a className={styles.home}>Home</a>
        <div className={styles.productImage}>
          <input
            className={styles.regularcaretright}
            type="radio"
            name="radioGroup-1"
          />
        </div>
        <div className={styles.shop}>Shop</div>
        <div className={styles.productImage1}>
          <input className={styles.regularcaretright1} type="radio" />
        </div>
        <div className={styles.shopGrid}>Shop Grid</div>
        <div className={styles.breadcrumbItems}>
          <input className={styles.regularcaretright2} type="radio" />
        </div>
        <div className={styles.shopGrid1}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid2}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon1}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid3}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon2}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid4}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon3}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.behicleAccessories}>Electronics Devices</div>
      </div>
    </div>
  );
};

Breadcrumb3.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb3;
