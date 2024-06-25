import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

const Product = ({
  className = "",
  image,
  oFF,
  dELL215InchFullHDMonitorE,
  value,
  symbol,
  propPadding,
}) => {
  const badge1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.fourthImage}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.badge} style={badge1Style}>
          <div className={styles.off}>{oFF}</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.dell215Inch}>{dELL215InchFullHDMonitorE}</div>
        <div className={styles.price}>
          <div className={styles.value}>{value}</div>
          <div className={styles.symbol}>{symbol}</div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  oFF: PropTypes.string,
  dELL215InchFullHDMonitorE: PropTypes.string,
  value: PropTypes.string,
  symbol: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Product;
