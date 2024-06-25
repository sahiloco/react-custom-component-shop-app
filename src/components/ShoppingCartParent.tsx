import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ShoppingCartParent.module.css";

const ShoppingCartParent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className={[styles.shoppingCartParent, className].join(" ")}>
      <form className={styles.shoppingCartContent}>
        <div className={styles.shoppingCartMain}>
          <div className={styles.shopingCard}>
            <div className={styles.shoppingCardWrapper}>
              <div className={styles.shoppingCard}>Shopping Card</div>
            </div>
            <div className={styles.subHeadingParent}>
              <div className={styles.subHeading}>
                <div className={styles.products}>Products</div>
                <div className={styles.price}>Price</div>
                <div className={styles.quantity}>Quantity</div>
                <div className={styles.subTotal}>Sub-Total</div>
              </div>
              <div className={styles.products1}>
                <div className={styles.product}>
                  <div className={styles.product1}>
                    <img
                      className={styles.regularxcircleIcon}
                      loading="lazy"
                      alt=""
                      src="/regularxcircle.svg"
                    />
                    <img
                      className={styles.mainImageIcon}
                      loading="lazy"
                      alt=""
                      src="/main-image@2x.png"
                    />
                    <div className={styles.appleMacbookPro}>
                      2024 Apple MacBook Pro with Apple M3 Chip (13-inch, 8GB
                      RAM, 256GB SSD Storage) - Space Gray
                    </div>
                  </div>
                  <div className={styles.productPriceContainer}>
                    <div className={styles.productPrice}>$1999</div>
                    <div className={styles.productPrice1}>$1699</div>
                  </div>
                  <div className={styles.quantity1}>
                    <div className={styles.button}>
                      <img
                        className={styles.duotoneminusIcon}
                        loading="lazy"
                        alt=""
                        src="/duotoneminus.svg"
                      />
                      <div className={styles.quantityValue}>01</div>
                      <img
                        className={styles.duotoneplusIcon}
                        loading="lazy"
                        alt=""
                        src="/duotoneplus.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.productTotal}>$1699</div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.buttonChild} />
                <div className={styles.navigationButtons}>
                  <div className={styles.buttonParent}>
                    <button className={styles.button2}>
                      <div className={styles.regulararrowleftWrapper}>
                        <img
                          className={styles.regulararrowleftIcon}
                          alt=""
                          src="/regulararrowleft.svg"
                        />
                      </div>
                      <b className={styles.label}>Return to Shop</b>
                    </button>
                    <div className={styles.button3}>
                      <b className={styles.label1}>Update cart</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardTotal}>
            <div className={styles.cardTotals}>Card Totals</div>
            <div className={styles.contentParent}>
              <div className={styles.content}>
                <div className={styles.priceLabels}>
                  <div className={styles.subTotal1}>Sub-total</div>
                  <div className={styles.shippingLabel}>$1699</div>
                </div>
                <div className={styles.priceLabels1}>
                  <div className={styles.shipping}>Shipping</div>
                  <div className={styles.free}>Free</div>
                </div>
                <div className={styles.priceLabels2}>
                  <div className={styles.discount}>Discount</div>
                  <div className={styles.div}>$59</div>
                </div>
                <div className={styles.priceLabels3}>
                  <div className={styles.tax}>Tax</div>
                  <div className={styles.div1}>$1640</div>
                </div>
              </div>
              <div className={styles.priceDivider} />
              <div className={styles.totalParent}>
                <div className={styles.total}>Total</div>
                <div className={styles.usd}>$1640 USD</div>
              </div>
            </div>
            <button className={styles.button4} onClick={onButtonClick}>
              <b className={styles.label2}>Proceed to Checkout</b>
              <div className={styles.checkoutIcon}>
                <img
                  className={styles.regulararrowrightIcon}
                  alt=""
                  src="/regulararrowright-1.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.couponeCode}>
          <div className={styles.heading}>
            <div className={styles.couponCode}>Coupon Code</div>
          </div>
          <div className={styles.couponInput}>
            <div className={styles.couponField}>
              <div className={styles.inputField}>
                <input
                  className={styles.emailAddress}
                  placeholder="Email address"
                  type="text"
                />
              </div>
              <div className={styles.button5}>
                <b className={styles.label3}>Apply Coupon</b>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

ShoppingCartParent.propTypes = {
  className: PropTypes.string,
};

export default ShoppingCartParent;
