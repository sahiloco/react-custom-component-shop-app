import Navigation3 from "./Navigation3";
import PropTypes from "prop-types";
import styles from "./Page.module.css";

const Page = ({ className = "" }) => {
  return (
    <section className={[styles.page, className].join(" ")}>
      <Navigation3
        black="/black@2x.png"
        shoppingCart="pending_I1:2578;305:2042;316:1608"
      />
    </section>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
