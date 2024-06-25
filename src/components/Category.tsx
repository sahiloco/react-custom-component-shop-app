import PropTypes from "prop-types";
import styles from "./Category.module.css";

const Category = ({ className = "" }) => {
  return (
    <section className={[styles.category, className].join(" ")}>
      <h1 className={styles.shopWithCategorys}>Shop with Categorys</h1>
      <div className={styles.item}>
        <div className={styles.category1}>
          <img className={styles.imageIcon} alt="" src="/image-10@2x.png" />
          <div className={styles.computerLaptop}>{`Computer & Laptop`}</div>
        </div>
        <div className={styles.category2}>
          <img className={styles.imageIcon1} alt="" src="/image-11@2x.png" />
          <div className={styles.computerLaptop1}>SmartPhone</div>
        </div>
        <div className={styles.category3}>
          <img className={styles.imageIcon2} alt="" src="/image-12@2x.png" />
          <div className={styles.computerLaptop2}>Headphones</div>
        </div>
        <div className={styles.category4}>
          <img className={styles.imageIcon3} alt="" src="/image-13@2x.png" />
          <div className={styles.computerLaptop3}>Accessories</div>
        </div>
        <div className={styles.category5}>
          <img className={styles.imageIcon4} alt="" src="/image-14@2x.png" />
          <div className={styles.computerLaptop4}>{`Camera & Photo`}</div>
        </div>
        <div className={styles.category6}>
          <img className={styles.imageIcon5} alt="" src="/image-15@2x.png" />
          <div className={styles.computerLaptop5}>{`TV & Homes`}</div>
        </div>
      </div>
    </section>
  );
};

Category.propTypes = {
  className: PropTypes.string,
};

export default Category;
