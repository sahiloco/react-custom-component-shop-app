import Breadcrumb1 from "./Breadcrumb1";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.breadcrumbWrapper, className].join(" ")}>
      <Breadcrumb1 />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
