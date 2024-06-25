import Banner1 from "./Banner1";
import Banner from "./Banner";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.bannerWrapperWrapper, className].join(" ")}>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerItem}>
            <div className={styles.banner}>
              <div className={styles.content}>
                <div className={styles.content1}>
                  <div className={styles.heading}>
                    <div className={styles.badge}>
                      <div className={styles.hot}>INTRODUCING</div>
                    </div>
                    <h1 className={styles.newAppleHomepodContainer}>
                      <p className={styles.newApple}>New Apple</p>
                      <p className={styles.homepodMini}>Homepod Mini</p>
                    </h1>
                  </div>
                  <div className={styles.jamPackedWithInnovation}>
                    Jam-packed with innovation, HomePod mini delivers
                    unexpectedly.
                  </div>
                </div>
                <button className={styles.button}>
                  <b className={styles.label}>Shop now</b>
                  <img
                    className={styles.regulararrowrightIcon}
                    alt=""
                    src="/regulararrowright-5.svg"
                  />
                </button>
              </div>
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-61@2x.png"
              />
            </div>
            <Banner1 />
          </div>
        </div>
        <Banner />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
