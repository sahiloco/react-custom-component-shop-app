import PropTypes from "prop-types";
import styles from "./Row.module.css";

const Row = ({ className = "" }) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.product}>
        <div className={styles.productContainer}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <div className={styles.badge}>
            <div className={styles.hot}>HOT</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.starParent}>
            <div className={styles.star}>
              <img
                className={styles.regularstarIcon}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon1}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon2}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon3}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon4}
                alt=""
                src="/regularstar1.svg"
              />
            </div>
            <div className={styles.productNamePlaceholders}>(738)</div>
          </div>
          <div className={styles.dell215Inch}>
            TOZO T6 True Wireless Earbuds Bluetooth Headphon...
          </div>
          <div className={styles.price}>
            <div className={styles.div}>$865.99</div>
            <div className={styles.productPriceItem}>$70</div>
          </div>
        </div>
      </div>
      <div className={styles.product1}>
        <div className={styles.imageParent}>
          <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
          <div className={styles.badge1}>
            <div className={styles.hot1}>HOT</div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.starGroup}>
            <div className={styles.star1}>
              <img
                className={styles.regularstarIcon5}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon6}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon7}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon8}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon9}
                alt=""
                src="/regularstar1.svg"
              />
            </div>
            <div className={styles.div1}>(738)</div>
          </div>
          <div className={styles.dell215Inch1}>
            TOZO T6 True Wireless Earbuds Bluetooth Headphon...
          </div>
          <div className={styles.price1}>
            <div className={styles.div2}>$865.99</div>
            <div className={styles.div3}>$70</div>
          </div>
        </div>
      </div>
      <div className={styles.product2}>
        <div className={styles.imageGroup}>
          <img className={styles.imageIcon2} alt="" src="/image1@2x.png" />
          <div className={styles.badge2}>
            <div className={styles.hot2}>HOT</div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.starContainer}>
            <div className={styles.star2}>
              <img
                className={styles.regularstarIcon10}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon11}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon12}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon13}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon14}
                alt=""
                src="/regularstar1.svg"
              />
            </div>
            <div className={styles.div4}>(738)</div>
          </div>
          <div className={styles.dell215Inch2}>
            TOZO T6 True Wireless Earbuds Bluetooth Headphon...
          </div>
          <div className={styles.price2}>
            <div className={styles.div5}>$865.99</div>
            <div className={styles.div6}>$70</div>
          </div>
        </div>
      </div>
      <div className={styles.product3}>
        <div className={styles.imageContainer}>
          <img className={styles.imageIcon3} alt="" src="/image1@2x.png" />
          <div className={styles.badge3}>
            <div className={styles.hot3}>HOT</div>
          </div>
        </div>
        <div className={styles.content3}>
          <div className={styles.frameDiv}>
            <div className={styles.star3}>
              <img
                className={styles.regularstarIcon15}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon16}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon17}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon18}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon19}
                alt=""
                src="/regularstar1.svg"
              />
            </div>
            <div className={styles.div7}>(738)</div>
          </div>
          <div className={styles.dell215Inch3}>
            TOZO T6 True Wireless Earbuds Bluetooth Headphon...
          </div>
          <div className={styles.price3}>
            <div className={styles.div8}>$865.99</div>
            <div className={styles.div9}>$70</div>
          </div>
        </div>
      </div>
      <div className={styles.product4}>
        <div className={styles.imageParent1}>
          <img className={styles.imageIcon4} alt="" src="/image1@2x.png" />
          <div className={styles.badge4}>
            <div className={styles.hot4}>HOT</div>
          </div>
        </div>
        <div className={styles.content4}>
          <div className={styles.starParent1}>
            <div className={styles.star4}>
              <img
                className={styles.regularstarIcon20}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon21}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon22}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon23}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon24}
                alt=""
                src="/regularstar1.svg"
              />
            </div>
            <div className={styles.div10}>(738)</div>
          </div>
          <div className={styles.dell215Inch4}>
            TOZO T6 True Wireless Earbuds Bluetooth Headphon...
          </div>
          <div className={styles.price4}>
            <div className={styles.div11}>$865.99</div>
            <div className={styles.div12}>$70</div>
          </div>
        </div>
      </div>
      <div className={styles.product5}>
        <div className={styles.imageParent2}>
          <img className={styles.imageIcon5} alt="" src="/image1@2x.png" />
          <div className={styles.badge5}>
            <div className={styles.hot5}>HOT</div>
          </div>
        </div>
        <div className={styles.content5}>
          <div className={styles.starParent2}>
            <div className={styles.star5}>
              <img
                className={styles.regularstarIcon25}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon26}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon27}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon28}
                alt=""
                src="/regularstar1.svg"
              />
              <img
                className={styles.regularstarIcon29}
                alt=""
                src="/regularstar1.svg"
              />
            </div>
            <div className={styles.div13}>(738)</div>
          </div>
          <div className={styles.dell215Inch5}>
            TOZO T6 True Wireless Earbuds Bluetooth Headphon...
          </div>
          <div className={styles.price5}>
            <div className={styles.div14}>$865.99</div>
            <div className={styles.div15}>$70</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
