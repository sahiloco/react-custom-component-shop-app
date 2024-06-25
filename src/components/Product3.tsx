import PropTypes from "prop-types";
import styles from "./Product3.module.css";

const Product3 = ({ className = "" }) => {
  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.productChild} />
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
        <div className={styles.badge}>
          <div className={styles.badge1}>
            <div className={styles.off}>32% OFF</div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.hot}>HOT</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.rating}>
            <img
              className={styles.regularstarIcon}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon1}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon2}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon3}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon4}
              alt=""
              src="/regularstar.svg"
            />
            <div className={styles.rating1}> (52,677)</div>
          </div>
          <div className={styles.xboxSeriesS}>
            Xbox Series S - 512GB SSD Console with Wireless Controller - EU
            Versio...
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.value}>$865.99</div>
          <div className={styles.symbol}>$442.12</div>
        </div>
        <div className={styles.gamesBuiltUsing}>
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.arrowButton}>
          <img className={styles.heartIcon} alt="" src="/heart-1.svg" />
        </div>
        <button className={styles.button1}>
          <div className={styles.cartIcon}>
            <img
              className={styles.shoppingcartsimpleIcon}
              alt=""
              src="/shoppingcartsimple.svg"
            />
          </div>
          <b className={styles.label}>Add to card</b>
        </button>
        <div className={styles.arrowButton1}>
          <img className={styles.regulareyeIcon} alt="" src="/regulareye.svg" />
        </div>
      </div>
    </div>
  );
};

Product3.propTypes = {
  className: PropTypes.string,
};

export default Product3;
