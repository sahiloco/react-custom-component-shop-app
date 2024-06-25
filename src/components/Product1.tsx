import PropTypes from "prop-types";
import styles from "./Product1.module.css";

const Product1 = ({
  className = "",
  image,
  dELL215InchFullHDMonitorE,
  value,
}) => {
  return (
    <div className={[styles.product, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.dell215Inch}>{dELL215InchFullHDMonitorE}</div>
        <div className={styles.price}>
          <div className={styles.div}>$865.99</div>
          <div className={styles.value}>{value}</div>
        </div>
      </div>
    </div>
  );
};

Product1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  dELL215InchFullHDMonitorE: PropTypes.string,
  value: PropTypes.string,
};

export default Product1;
