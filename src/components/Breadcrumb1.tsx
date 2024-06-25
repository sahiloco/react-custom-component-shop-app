import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Breadcrumb1.module.css";

const Breadcrumb1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className={[styles.breadcrumb, className].join(" ")}>
      <div className={styles.breadcumb}>
        <img
          className={styles.regularhouseIcon}
          alt=""
          src="/regularhouse.svg"
        />
        <a className={styles.home} onClick={onHomeTextClick}>
          Home
        </a>
        <div className={styles.regularcaretrightWrapper}>
          <img
            className={styles.regularcaretrightIcon}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shop} onClick={onShopTextClick}>
          Shopping Card
        </div>
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

Breadcrumb1.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb1;
