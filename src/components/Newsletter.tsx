import PropTypes from "prop-types";
import styles from "./Newsletter.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <section className={[styles.newsletter, className].join(" ")}>
      <div className={styles.content}>
        <h1 className={styles.subscribeToOur}>Subscribe to our newsletter</h1>
        <div className={styles.praesentFringillaEratALaciWrapper}>
          <div className={styles.praesentFringillaErat}>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </div>
        </div>
      </div>
      <div className={styles.input}>
        <div className={styles.inputField}>
          <input
            className={styles.input1}
            placeholder="Email address"
            type="text"
          />
          <button className={styles.button}>
            <b className={styles.label}>Subscribe</b>
            <div className={styles.icon}>
              <img
                className={styles.regulararrowrightIcon}
                alt=""
                src="/regulararrowright-2.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.logos}>
        <div className={styles.companyLogo}>
          <div className={styles.divider} />
          <div className={styles.logo}>
            <img
              className={styles.google20151Icon}
              loading="lazy"
              alt=""
              src="/google2015-1.svg"
            />
            <img
              className={styles.brandIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <img
              className={styles.philips1Icon}
              loading="lazy"
              alt=""
              src="/philips-1.svg"
            />
            <img
              className={styles.toshiba11Icon}
              loading="lazy"
              alt=""
              src="/toshiba1-1.svg"
            />
            <img
              className={styles.samsung41Icon}
              loading="lazy"
              alt=""
              src="/samsung4-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
