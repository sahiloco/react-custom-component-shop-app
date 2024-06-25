import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Product2.module.css";

const Product2 = ({
  className = "",
  image,
  sOLDOUT,
  dELL215InchFullHDMonitorE,
  value,
  propBackgroundColor,
  propMinWidth,
  propMinWidth1,
}) => {
  const badgeStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const sOLDOUTStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const valueStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.soldImage}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.badge} style={badgeStyle}>
          <div className={styles.soldOut} style={sOLDOUTStyle}>
            {sOLDOUT}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.dell215Inch}>{dELL215InchFullHDMonitorE}</div>
        <div className={styles.price}>
          <div className={styles.div}>$865.99</div>
          <div className={styles.value} style={valueStyle}>
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

Product2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  sOLDOUT: PropTypes.string,
  dELL215InchFullHDMonitorE: PropTypes.string,
  value: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Product2;
