import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  image10,
  razorPay,
  propPadding,
  propWidth,
  propOverflow,
}) => {
  const paymentMethodTopRowStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image10IconStyle = useMemo(() => {
    return {
      width: propWidth,
      overflow: propOverflow,
    };
  }, [propWidth, propOverflow]);

  return (
    <div className={[styles.paymentMethodItems, className].join(" ")}>
      <div className={styles.paymentMethodRows}>
        <div
          className={styles.paymentMethodTopRow}
          style={paymentMethodTopRowStyle}
        >
          <img
            className={styles.image10Icon}
            loading="lazy"
            alt=""
            src={image10}
            style={image10IconStyle}
          />
        </div>
        <div className={styles.razorpay}>{razorPay}</div>
      </div>
      <div className={styles.paymentMethodBottomRow}>
        <div className={styles.fromElements} />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  image10: PropTypes.string,
  razorPay: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propOverflow: PropTypes.any,
};

export default FrameComponent1;
