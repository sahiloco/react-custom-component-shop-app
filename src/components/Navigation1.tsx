import Widget from "./Widget";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";
import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <section className={[styles.navigation, className].join(" ")}>
      <Widget />
      <div className={styles.navigation1}>
        <div className={styles.topNav}>
          <div
            className={styles.welcomeToClicon}
          >{`Welcome to Clicon online eCommerce store. `}</div>
          <div className={styles.leftContent}>
            <div className={styles.followUs}>
              <div className={styles.followUs1}>Follow us:</div>
              <div className={styles.socialIcon}>
                <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
                <img
                  className={styles.facebookIcon}
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className={styles.pinterestIcon}
                  alt=""
                  src="/pinterest.svg"
                />
                <img className={styles.redditIcon} alt="" src="/reddit.svg" />
                <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
                <img
                  className={styles.instagramIcon}
                  alt=""
                  src="/instagram.svg"
                />
              </div>
            </div>
            <div className={styles.leftContentChild} />
            <div className={styles.multiLanguagedrodpwon}>
              <div className={styles.dropdown}>
                <div className={styles.eng}>Eng</div>
                <img
                  className={styles.regularcaretdownIcon}
                  alt=""
                  src="/regularcaretdown.svg"
                />
              </div>
            </div>
            <div className={styles.multiCurrencydropdown}>
              <div className={styles.dropdown1}>
                <div className={styles.usd}>USD</div>
                <img
                  className={styles.regularcaretdownIcon1}
                  alt=""
                  src="/regularcaretdown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <MiddleNav cartIcon="pending_I106:3091;1:2578;305:2042;316:1608" />
        <BottomNav />
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
