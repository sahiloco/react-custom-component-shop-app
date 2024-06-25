import PropTypes from "prop-types";
import styles from "./Widget3.module.css";

const Widget3 = ({ className = "" }) => {
  return (
    <div className={[styles.widget, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.heading}>
              <div className={styles.caption}>
                <div className={styles.deviderWrapper}>
                  <div className={styles.devider} />
                </div>
                <div className={styles.theBestPlace}>
                  THE BEST PLACE TO PLAY
                </div>
              </div>
              <h1 className={styles.xboxConsoles}>Xbox Consoles</h1>
            </div>
            <div className={styles.saveUpTo}>
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
              for $2 USD.
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.label}>Shop Now</b>
            <div className={styles.icon}>
              <img
                className={styles.regulararrowrightIcon}
                alt=""
                src="/regulararrowright-1.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.dot}>
          <div className={styles.dotOne} />
          <div className={styles.dotTwo} />
          <div className={styles.dotThree} />
        </div>
      </div>
      <div className={styles.footer}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className={styles.price}>
          <div className={styles.daysRemaining}>$299</div>
        </div>
      </div>
    </div>
  );
};

Widget3.propTypes = {
  className: PropTypes.string,
};

export default Widget3;
