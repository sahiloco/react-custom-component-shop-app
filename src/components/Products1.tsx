import Row from "./Row";
import PropTypes from "prop-types";
import styles from "./Products1.module.css";

const Products1 = ({ className = "" }) => {
  return (
    <div className={[styles.products, className].join(" ")}>
      <Row />
    </div>
  );
};

Products1.propTypes = {
  className: PropTypes.string,
};

export default Products1;
