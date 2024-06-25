import PropTypes from "prop-types";
import styles from "./CliconECommerce.module.css";

const CliconECommerce = ({ className = "" }) => {
  return (
    <div className={[styles.cliconEcommerce, className].join(" ")}>
      <div className={styles.logo}>
        <img className={styles.icon} alt="" src="/icon-1.svg" />
        <h1 className={styles.clicon}>CLICON</h1>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.phoneNumber}>
          <div className={styles.customerSupports}>Customer Supports:</div>
          <div className={styles.supportNumber}>(629) 555-0129</div>
        </div>
        <div className={styles.washingtonAveManchester}>
          4517 Washington Ave. Manchester, Kentucky 39495
        </div>
        <div className={styles.infokinbocom}>info@kinbo.com</div>
      </div>
    </div>
  );
};

CliconECommerce.propTypes = {
  className: PropTypes.string,
};

export default CliconECommerce;
