import Widget3 from "./Widget3";
import Widget2 from "./Widget2";
import Widget1 from "./Widget1";
import Feature from "./Feature";
import Product3 from "./Product3";
import Product2 from "./Product2";
import Product1 from "./Product1";
import Product from "./Product";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.structure}>
        <div className={styles.content}>
          <div className={styles.header}>
            <Widget3 />
            <div className={styles.smallWidgets}>
              <Widget2 />
              <Widget1 />
            </div>
          </div>
          <div className={styles.features}>
            <Feature
              duotonePackage="/duotonepackage.svg"
              fastedDelivery="Fasted Delivery"
              deliveryIn24H="Delivery in 24/H"
            />
            <div className={styles.soldOutWrapper}>
              <div className={styles.soldOut} />
            </div>
            <Feature
              duotonePackage="/duotonetrophy.svg"
              fastedDelivery="24 Hours Return"
              deliveryIn24H="100% money-back guarantee"
            />
            <div className={styles.productSeparator}>
              <div className={styles.securePayment} />
            </div>
            <Feature
              duotonePackage="/duotonecreditcard.svg"
              fastedDelivery="Secure Payment"
              deliveryIn24H="Your money is safe"
            />
            <div className={styles.separator}>
              <div className={styles.separatorChild} />
            </div>
            <Feature
              duotonePackage="/duotoneheadphones.svg"
              fastedDelivery="Support 24/7"
              deliveryIn24H="Live contact/message"
            />
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.heading}>
            <div className={styles.content2}>
              <h2 className={styles.bestDeals}>Best Deals</h2>
              <div className={styles.dealsEndsIn}>
                <div className={styles.dealsEndsIn1}>Deals ends in</div>
                <div className={styles.time}>
                  <div className={styles.d}>16d</div>
                  <div className={styles.daysValue}>:</div>
                  <div className={styles.h}>21h</div>
                  <div className={styles.hoursValue}>:</div>
                  <div className={styles.m}>57m</div>
                  <div className={styles.minutesValue}>:</div>
                  <div className={styles.s}>23s</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.browseAllProduct}>Browse All Product</div>
              <img
                className={styles.regulararrowrightIcon}
                alt=""
                src="/regulararrowright-4.svg"
              />
            </div>
          </div>
          <div className={styles.productParent}>
            <Product3 />
            <div className={styles.productGroup}>
              <Product2
                image="/image-2@2x.png"
                sOLDOUT="SOLD OUT"
                dELL215InchFullHDMonitorE="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
                value="$2,300"
              />
              <Product1
                image="/image-3@2x.png"
                dELL215InchFullHDMonitorE="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                value="$299"
              />
            </div>
            <div className={styles.productContainer}>
              <Product1
                image="/image-4@2x.png"
                dELL215InchFullHDMonitorE="Simple Mobile 4G LTE Prepaid Smartphone"
                value="$220"
              />
              <div className={styles.product}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-51@2x.png"
                />
                <div className={styles.content3}>
                  <div className={styles.dell215Inch}>
                    Portable Wshing Machine, 11lbs capacity Model 18NMFIAM
                  </div>
                  <div className={styles.price}>
                    <div className={styles.value}>$865.99</div>
                    <div className={styles.symbol}>$70</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <Product
                image="/image-6@2x.png"
                oFF="19% OFF"
                dELL215InchFullHDMonitorE="4K UHD LED Smart TV with Chromecast Built-in"
                value="$865"
                symbol="$1,50"
              />
              <Product2
                image="/image-7@2x.png"
                sOLDOUT="HOT"
                dELL215InchFullHDMonitorE="2-Barrel Carburetor Carb 2100 Engine Increase Horsepower"
                value="$160"
                propBackgroundColor="#ee5858"
                propMinWidth="26px"
                propMinWidth1="34px"
              />
            </div>
            <div className={styles.productParent1}>
              <div className={styles.product1}>
                <div className={styles.imageParent}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-8@2x.png"
                  />
                  <div className={styles.overly} />
                  <div className={styles.button1}>
                    <div className={styles.arrowButton}>
                      <img
                        className={styles.heartIcon}
                        alt=""
                        src="/heart-2.svg"
                      />
                    </div>
                    <div className={styles.arrowButton1}>
                      <img
                        className={styles.shoppingcartsimpleIcon}
                        alt=""
                        src="/shoppingcartsimple-1.svg"
                      />
                    </div>
                    <div className={styles.arrowButton2}>
                      <img
                        className={styles.regulareyeIcon}
                        alt=""
                        src="/regulareye.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.content4}>
                  <div
                    className={styles.dell215Inch1}
                  >{`Sony DSCHX8 High Zoom Point & Shoot Camera`}</div>
                  <div className={styles.price1}>
                    <div className={styles.div}>$865.99</div>
                    <div className={styles.amount}>$1,200</div>
                  </div>
                </div>
              </div>
              <Product
                image="/image-9@2x.png"
                oFF="32% OFF"
                dELL215InchFullHDMonitorE="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black"
                value="$360"
                symbol="$250"
                propPadding="5px 10px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
