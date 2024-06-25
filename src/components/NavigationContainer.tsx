import Navigation2 from "./Navigation2";
import PropTypes from "prop-types";
import styles from "./NavigationContainer.module.css";

const NavigationContainer = ({ className = "" }) => {
  return (
    <div className={[styles.navigationContainer, className].join(" ")}>
      <Navigation2 />
      <div className={styles.breadcrumb}>
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
          <div className={styles.shop}>Pages</div>
          <img
            className={styles.regularcaretrightIcon1}
            alt=""
            src="/regularcaretright.svg"
          />
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
          <div className={styles.behicleAccessories}>Shoping Card</div>
        </div>
      </div>
    </div>
  );
};

NavigationContainer.propTypes = {
  className: PropTypes.string,
};

export default NavigationContainer;
