import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Navigation3.module.css";

const Navigation3 = ({
  className = "",
  black,
  shoppingCart,
  blackIconFlex,
  blackIconAlignSelf,
  iconTop,
  iconPosition,
  frameDivWidth,
  fourthFlex,
  fourthWidth,
  categoryPadding,
  categoryGap,
  customerSupportTextDecoration,
}) => {
  const navigationStyle = useMemo(() => {
    return {
      flex: blackIconFlex,
      alignSelf: blackIconAlignSelf,
    };
  }, [blackIconFlex, blackIconAlignSelf]);

  const middleNavStyle = useMemo(() => {
    return {
      top: iconTop,
      position: iconPosition,
    };
  }, [iconTop, iconPosition]);

  const thirdStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: fourthFlex,
      width: fourthWidth,
    };
  }, [fourthFlex, fourthWidth]);

  const bottomNavStyle = useMemo(() => {
    return {
      padding: categoryPadding,
      gap: categoryGap,
    };
  }, [categoryPadding, categoryGap]);

  const compareStyle = useMemo(() => {
    return {
      textDecoration: customerSupportTextDecoration,
    };
  }, [customerSupportTextDecoration]);

  return (
    <div
      className={[styles.navigation, className].join(" ")}
      style={navigationStyle}
    >
      <div className={styles.widget}>
        <img className={styles.blackIcon} loading="lazy" alt="" src={black} />
        <div className={styles.day}>
          <a className={styles.friday}>Friday</a>
        </div>
        <div className={styles.offer}>
          <div className={styles.discount}>
            <div className={styles.preposition}>
              <a className={styles.upTo}>Up to</a>
            </div>
            <a className={styles.discountPercent}>59%</a>
            <div className={styles.off}>
              <a className={styles.off1}>OFF</a>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <a className={styles.label}>Shop now</a>
          <div className={styles.icon}>
            <img
              className={styles.regulararrowrightIcon}
              alt=""
              src="/regulararrowright.svg"
            />
          </div>
        </button>
        <div className={styles.close}>
          <div className={styles.closeButton}>
            <img className={styles.duotonexIcon} alt="" src="/duotonex.svg" />
          </div>
        </div>
      </div>
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
        <header className={styles.middleNav} style={middleNavStyle}>
          <div className={styles.logo}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <div className={styles.cliconWrapper}>
              <a className={styles.clicon}>CLICON</a>
            </div>
          </div>
          <div className={styles.search}>
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
          <div className={styles.actions}>
            <div className={styles.icons}>
              <div className={styles.shoppingcartsimple}>
                <img
                  className={styles.shoppingCartIcon}
                  alt=""
                  src={shoppingCart}
                />
                <div className={styles.second}>
                  <div className={styles.third} style={thirdStyle}>
                    <img
                      className={styles.profileIcon}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <div
                      className={styles.notificationCountWrapper}
                      style={frameDivStyle}
                    >
                      <div className={styles.notificationCount}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.fourth}>
                  <img className={styles.chatIcon} alt="" src="/vector-2.svg" />
                  <img className={styles.helpIcon} alt="" src="/vector-2.svg" />
                </div>
              </div>
              <img className={styles.heartIcon} alt="" src="/heart.svg" />
              <img
                className={styles.regularuserIcon}
                alt=""
                src="/regularuser.svg"
              />
            </div>
          </div>
        </header>
        <div className={styles.bottomNav} style={bottomNavStyle}>
          <div className={styles.leftSide}>
            <div className={styles.category}>
              <div className={styles.button1}>
                <div className={styles.allCategory}>All Category</div>
                <div className={styles.icon2}>
                  <img
                    className={styles.regularcaretdownIcon2}
                    alt=""
                    src="/regularcaretdown-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.options}>
              <div className={styles.trackOrder}>
                <img
                  className={styles.regularmappinlineIcon}
                  alt=""
                  src="/regularmappinline.svg"
                />
                <div className={styles.tooltips}>
                  <div className={styles.trackOrder1}>Track Order</div>
                </div>
              </div>
            </div>
            <div className={styles.options1}>
              <div className={styles.compare}>
                <img
                  className={styles.duotonearrowscounterclockwiseIcon}
                  alt=""
                  src="/duotonearrowscounterclockwise.svg"
                />
                <div className={styles.compareWrapper}>
                  <a className={styles.compare1} style={compareStyle}>
                    Compare
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.options2}>
              <div className={styles.customerSupport}>
                <img
                  className={styles.regularheadphonesIcon}
                  alt=""
                  src="/regularheadphones.svg"
                />
                <div className={styles.customerSupportWrapper}>
                  <div className={styles.customerSupport1}>
                    Customer Support
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.options3}>
              <div className={styles.needHelp}>
                <img
                  className={styles.regularinfoIcon}
                  alt=""
                  src="/regularinfo.svg"
                />
                <div className={styles.needHelpWrapper}>
                  <div className={styles.needHelp1}>Need Help</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phone}>
            <div className={styles.callNow}>
              <img
                className={styles.regularphonecallIcon}
                alt=""
                src="/regularphonecall.svg"
              />
              <div className={styles.number}>
                <div className={styles.phoneNumber}>+1-202-555-0104</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation3.propTypes = {
  className: PropTypes.string,
  black: PropTypes.string,
  shoppingCart: PropTypes.string,

  /** Style props */
  blackIconFlex: PropTypes.any,
  blackIconAlignSelf: PropTypes.any,
  iconTop: PropTypes.any,
  iconPosition: PropTypes.any,
  frameDivWidth: PropTypes.any,
  fourthFlex: PropTypes.any,
  fourthWidth: PropTypes.any,
  categoryPadding: PropTypes.any,
  categoryGap: PropTypes.any,
  customerSupportTextDecoration: PropTypes.any,
};

export default Navigation3;
