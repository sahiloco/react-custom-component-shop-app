import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./OrderSummery.module.css";

const OrderSummery = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/order-success");
  }, [navigate]);

  return (
    <div className={[styles.orderSummery, className].join(" ")}>
      <div className={styles.orderSummaryHeader}>
        <div className={styles.orderSummery1}>Order Summery</div>
      </div>
      <div className={styles.orderItems}>
        <div className={styles.orderItem}>
          <div className={styles.product}>
            <img
              className={styles.mainImageIcon}
              loading="lazy"
              alt=""
              src="/main-image@2x.png"
            />
            <div className={styles.content}>
              <div className={styles.appleMacbookPro}>
                2024 Apple MacBook Pro with Apple M3 Chip (13-inch, 8GB RAM,
                256GB SSD Storage) - Space Gray
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$865.99</div>
                <div className={styles.x}>1 x</div>
                <div className={styles.priceValue}>$1699</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderSummaryCalculation}>
          <div className={styles.totalsBreakdown}>
            <div className={styles.content1}>
              <div className={styles.priceDetailLabels}>
                <div className={styles.subTotal}>Sub-total</div>
                <div className={styles.priceDetailValues}>$1699</div>
              </div>
              <div className={styles.priceDetailLabels1}>
                <div className={styles.shipping}>Shipping</div>
                <div className={styles.free}>Free</div>
              </div>
              <div className={styles.priceDetailLabels2}>
                <div className={styles.discount}>Discount</div>
                <div className={styles.div1}>$59</div>
              </div>
              <div className={styles.priceDetailLabels3}>
                <div className={styles.tax}>Tax</div>
                <div className={styles.div2}>$1640</div>
              </div>
            </div>
            <div className={styles.totalDivider} />
            <div className={styles.totalPrice}>
              <div className={styles.total}>Total</div>
              <div className={styles.usd}>$1640 USD</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderSummaryActions}>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.label}>Place order</b>
          <div className={styles.paymentButtonIcon}>
            <img
              className={styles.regulararrowrightIcon}
              alt=""
              src="/regulararrowright-13.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

OrderSummery.propTypes = {
  className: PropTypes.string,
};

export default OrderSummery;
