import PropTypes from "prop-types";
import styles from "./Feature.module.css";

const Feature = ({
  className = "",
  duotonePackage,
  fastedDelivery,
  deliveryIn24H,
}) => {
  return (
    <div className={[styles.feature, className].join(" ")}>
      <div className={styles.packageIcon}>
        <img
          className={styles.duotonepackageIcon}
          loading="lazy"
          alt=""
          src={duotonePackage}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.fastedDelivery}>{fastedDelivery}</div>
        <div className={styles.deliveryIn24h}>{deliveryIn24H}</div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
  duotonePackage: PropTypes.string,
  fastedDelivery: PropTypes.string,
  deliveryIn24H: PropTypes.string,
};

export default Feature;
