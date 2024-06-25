import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={[styles.filterBar, className].join(" ")}>
      <div className={styles.productName}>
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
        <div className={styles.frameParent}>
          <div className={styles.sortByWrapper}>
            <div className={styles.sortBy}>Sort by:</div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.goodMorning}>Most Popular</div>
            <div className={styles.regularcaretdownWrapper}>
              <img
                className={styles.regularcaretdownIcon}
                alt=""
                src="/regularcaretdown-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.activeFiltersResults}>
        <div className={styles.activeFilters}>
          <div className={styles.activeFilters1}>Active Filters:</div>
          <div className={styles.activeFilters2}>
            <div className={styles.wingChair}>Electronics Devices</div>
            <img className={styles.duotonexIcon} alt="" src="/duotonex-1.svg" />
          </div>
          <div className={styles.activeFilters3}>
            <div className={styles.wingChair1}>5 Star Rating</div>
            <img
              className={styles.duotonexIcon1}
              alt=""
              src="/duotonex-1.svg"
            />
          </div>
        </div>
        <div className={styles.resultsFound}>
          <span>
            <span className={styles.span}>65,867</span>
          </span>
          <span className={styles.resultsFound1}>
            <span>{` `}</span>
            <span>Results found.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
