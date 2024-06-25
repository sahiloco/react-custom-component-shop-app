import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SuccessMessage.module.css";

const SuccessMessage = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={[styles.successMessage, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.duotonecheckcircleIcon}
          loading="lazy"
          alt=""
          src="/duotonecheckcircle.svg"
        />
        <div className={styles.message}>
          <h2 className={styles.yourOrderIs}>
            Your order is successfully place
          </h2>
          <div className={styles.pellentesqueSedLectus}>
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.button1} onClick={onButtonContainerClick}>
          <img
            className={styles.regularstackIcon}
            alt=""
            src="/regularstack.svg"
          />
          <b className={styles.label}>Go to HOMEPAGE</b>
        </div>
        <button className={styles.button2}>
          <b className={styles.label1}>View Order</b>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright-11.svg"
          />
        </button>
      </div>
    </section>
  );
};

SuccessMessage.propTypes = {
  className: PropTypes.string,
};

export default SuccessMessage;
