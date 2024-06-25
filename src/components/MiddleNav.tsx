import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./MiddleNav.module.css";

const MiddleNav = ({
  className = "",
  cartIcon,
  middleNavPadding,
  middleNavGap,
}) => {
  const middleNav1Style = useMemo(() => {
    return {
      padding: middleNavPadding,
      gap: middleNavGap,
    };
  }, [middleNavPadding, middleNavGap]);

  return (
    <div
      className={[styles.middleNav, className].join(" ")}
      style={middleNav1Style}
    >
      <div className={styles.logo}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
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
            <img className={styles.cartIcon} alt="" src={cartIcon} />
            <div className={styles.shoppingcartsimpleInner}>
              <div className={styles.heartIconParent}>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.userIconBackground}>
                  <div className={styles.userIcon}>2</div>
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
                className={styles.notificationCountIcon}
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
  );
};

MiddleNav.propTypes = {
  className: PropTypes.string,
  cartIcon: PropTypes.string,

  /** Style props */
  middleNavPadding: PropTypes.any,
  middleNavGap: PropTypes.any,
};

export default MiddleNav;
