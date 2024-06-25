import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Blog.module.css";

const Blog = ({
  className = "",
  unsplashiZVrfElG1t0,
  kevin,
  dec2021,
  count,
  praesentFringillaEratALac,
  suspendisseIaculisMiNecSu,
  propOverflow,
  propMinWidth,
}) => {
  const blogStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const dec2021Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.blog, className].join(" ")} style={blogStyle}>
      <img
        className={styles.unsplashizvrfelg1t0Icon}
        loading="lazy"
        alt=""
        src={unsplashiZVrfElG1t0}
      />
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.funFact}>
            <div className={styles.user}>
              <img
                className={styles.regularusercircleIcon}
                loading="lazy"
                alt=""
                src="/regularusercircle.svg"
              />
              <div className={styles.kevin}>{kevin}</div>
            </div>
            <div className={styles.date}>
              <img
                className={styles.regularcalendarblankIcon}
                loading="lazy"
                alt=""
                src="/regularcalendarblank.svg"
              />
              <div className={styles.dec2021} style={dec2021Style}>
                {dec2021}
              </div>
            </div>
            <div className={styles.chat}>
              <img
                className={styles.regularchatcircledotsIcon}
                loading="lazy"
                alt=""
                src="/regularchatcircledots.svg"
              />
              <div className={styles.count}>{count}</div>
            </div>
          </div>
          <div className={styles.praesentFringillaErat}>
            {praesentFringillaEratALac}
          </div>
        </div>
        <div className={styles.suspendisseIaculisMi}>
          {suspendisseIaculisMiNecSu}
        </div>
      </div>
      <button className={styles.button}>
        <b className={styles.label}>Read more</b>
        <img
          className={styles.regulararrowrightIcon}
          alt=""
          src="/regulararrowright-8.svg"
        />
      </button>
    </div>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
  unsplashiZVrfElG1t0: PropTypes.string,
  kevin: PropTypes.string,
  dec2021: PropTypes.string,
  count: PropTypes.string,
  praesentFringillaEratALac: PropTypes.string,
  suspendisseIaculisMiNecSu: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Blog;
