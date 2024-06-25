import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "", country }) => {
  return (
    <div className={[styles.countryZipDropdowns, className].join(" ")}>
      <div className={styles.country}>{country}</div>
      <div className={styles.dropdown}>
        <div className={styles.select}>Select...</div>
        <div className={styles.dropdownCaret}>
          <img
            className={styles.regularcaretdownIcon}
            alt=""
            src="/regularcaretdown-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  country: PropTypes.string,
};

export default FrameComponent2;
