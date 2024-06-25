import PropTypes from "prop-types";
import styles from "./Navigation2.module.css";

const Navigation2 = ({ className = "" }) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <div className={styles.widget}>
        <img
          className={styles.blackIcon}
          loading="lazy"
          alt=""
          src="/black@2x.png"
        />
        <div className={styles.fridayWrapper}>
          <a className={styles.friday}>Friday</a>
        </div>
        <div className={styles.discountContainer}>
          <div className={styles.discount}>
            <div className={styles.upToWrapper}>
              <a className={styles.upTo}>Up to</a>
            </div>
            <a className={styles.promoOffValue}>59%</a>
            <div className={styles.offWrapper}>
              <a className={styles.off}>OFF</a>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <a className={styles.label}>Shop now</a>
          <div className={styles.regulararrowrightWrapper}>
            <img
              className={styles.regulararrowrightIcon}
              alt=""
              src="/regulararrowright.svg"
            />
          </div>
        </button>
        <div className={styles.closeButtonContainer}>
          <div className={styles.closeButton}>
            <img className={styles.duotonexIcon} alt="" src="/duotonex.svg" />
          </div>
        </div>
      </div>
      <header className={styles.navigation1}>
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
        <div className={styles.middleNav}>
          <div className={styles.logo}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <div className={styles.cliconWrapper}>
              <a className={styles.clicon}>CLICON</a>
            </div>
          </div>
          <div className={styles.searchBar}>
            <input
              className={styles.searchForAnything}
              placeholder="Search for anything..."
              type="text"
            />
            <img
              className={styles.regularmagnifyingglassIcon}
              alt=""
              src="/regularmagnifyingglass.svg"
            />
          </div>
          <div className={styles.iconsWrapper}>
            <div className={styles.icons}>
              <div className={styles.shoppingcartsimple}>
                <img className={styles.shoppingCartIcon} alt="" />
                <div className={styles.shoppingcartsimpleInner}>
                  <div className={styles.heartIconParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <div className={styles.userIconSubContainer}>
                      <a className={styles.userIcon}>2</a>
                    </div>
                  </div>
                </div>
                <div className={styles.notificationIconParent}>
                  <img
                    className={styles.notificationIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.cartQuantityIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
              <img
                className={styles.heartIcon1}
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
              <img
                className={styles.regularuserIcon}
                loading="lazy"
                alt=""
                src="/regularuser.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomNav}>
          <div className={styles.leftSide}>
            <div className={styles.category}>
              <div className={styles.button1}>
                <a className={styles.allCategory}>All Category</a>
                <div className={styles.regularcaretdownWrapper}>
                  <img
                    className={styles.regularcaretdownIcon2}
                    alt=""
                    src="/regularcaretdown-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.trackOrderCompare}>
              <div className={styles.trackOrder}>
                <img
                  className={styles.regularmappinlineIcon}
                  loading="lazy"
                  alt=""
                  src="/regularmappinline.svg"
                />
                <div className={styles.trackOrderNeedHelp}>
                  <div className={styles.trackOrder1}>Track Order</div>
                </div>
              </div>
            </div>
            <div className={styles.trackOrderCompare1}>
              <div className={styles.compare}>
                <img
                  className={styles.duotonearrowscounterclockwiseIcon}
                  loading="lazy"
                  alt=""
                  src="/duotonearrowscounterclockwise.svg"
                />
                <div className={styles.compareWrapper}>
                  <div className={styles.compare1}>Compare</div>
                </div>
              </div>
            </div>
            <div className={styles.trackOrderCompare2}>
              <div className={styles.customerSupport}>
                <img
                  className={styles.regularheadphonesIcon}
                  loading="lazy"
                  alt=""
                  src="/regularheadphones.svg"
                />
                <div className={styles.customerSupportWrapper}>
                  <a className={styles.customerSupport1}>Customer Support</a>
                </div>
              </div>
            </div>
            <div className={styles.trackOrderCompare3}>
              <div className={styles.needHelp}>
                <img
                  className={styles.regularinfoIcon}
                  loading="lazy"
                  alt=""
                  src="/regularinfo.svg"
                />
                <div className={styles.needHelpWrapper}>
                  <div className={styles.needHelp1}>Need Help</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.callNowWrapper}>
            <div className={styles.callNow}>
              <img
                className={styles.regularphonecallIcon}
                loading="lazy"
                alt=""
                src="/regularphonecall.svg"
              />
              <div className={styles.phoneNumberWrapper}>
                <div className={styles.phoneNumber}>+1-202-555-0104</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Navigation2.propTypes = {
  className: PropTypes.string,
};

export default Navigation2;
