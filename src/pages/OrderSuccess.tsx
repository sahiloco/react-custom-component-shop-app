import Navigation1 from "../components/Navigation1";
import Breadcrumb from "../components/Breadcrumb";
import SuccessMessage from "../components/SuccessMessage";
import Footer from "../components/Footer";
import styles from "./OrderSuccess.module.css";

const OrderSuccess = () => {
  return (
    <div className={styles.orderSuccess}>
      <Navigation1 />
      <Breadcrumb />
      <SuccessMessage />
      <Footer />
    </div>
  );
};

export default OrderSuccess;
