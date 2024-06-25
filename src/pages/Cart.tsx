import NavigationContainer from "../components/NavigationContainer";
import ShoppingCartParent from "../components/ShoppingCartParent";
import CliconECommerce from "../components/CliconECommerce";
import TopCategory from "../components/TopCategory";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <section className={styles.navigationContainerParent}>
        <NavigationContainer />
        <ShoppingCartParent />
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer1}>
          <CliconECommerce />
          <TopCategory />
          <div className={styles.quickLinks}>
            <div className={styles.quickLinks1}>Quick links</div>
            <div className={styles.item}>
              <div className={styles.footerLinks}>
                <div className={styles.electronics}>Shop Product</div>
              </div>
              <div className={styles.footerLinks1}>
                <div className={styles.electronics1}>Shoping Cart</div>
              </div>
              <div className={styles.footerLinks2}>
                <div className={styles.electronics2}>Wishlist</div>
              </div>
              <div className={styles.footerLinks3}>
                <div className={styles.electronics3}>Compare</div>
              </div>
              <div className={styles.footerLinks4}>
                <div className={styles.electronics4}>Track Order</div>
              </div>
              <div className={styles.footerLinks5}>
                <div className={styles.electronics5}>Customer Help</div>
              </div>
              <div className={styles.footerLinks6}>
                <div className={styles.electronics6}>About Us</div>
              </div>
            </div>
          </div>
          <div className={styles.quickLinks2}>
            <div className={styles.downloadApp}>Download APp</div>
            <div className={styles.links}>
              <div className={styles.mobileApp}>
                <img
                  className={styles.icongooglePlay1}
                  alt=""
                  src="/icongoogleplay-1.svg"
                />
                <div className={styles.info}>
                  <div className={styles.getItNow}>Get it now</div>
                  <div className={styles.googlePlay}>Google Play</div>
                </div>
              </div>
              <div className={styles.mobileApp1}>
                <img
                  className={styles.appleNegative1Icon}
                  loading="lazy"
                  alt=""
                  src="/applenegative-1.svg"
                />
                <div className={styles.info1}>
                  <div className={styles.getItNow1}>Get it now</div>
                  <div className={styles.appStore}>App Store</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.popularTag}>
            <div className={styles.popularTag1}>Popular Tag</div>
            <div className={styles.tag}>
              <div className={styles.row}>
                <div className={styles.tag1}>
                  <div className={styles.cooking}>Game</div>
                </div>
                <div className={styles.tag2}>
                  <div className={styles.cooking1}>iPhone</div>
                </div>
                <div className={styles.tag3}>
                  <div className={styles.cooking2}>TV</div>
                </div>
                <div className={styles.tag4}>
                  <div className={styles.cooking3}>Asus Laptops</div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.tag5}>
                  <div className={styles.cooking4}>{`Macbook `}</div>
                </div>
                <div className={styles.tag6}>
                  <div className={styles.cooking5}>SSD</div>
                </div>
                <div className={styles.tag7}>
                  <div className={styles.cooking6}>{`Graphics Card `}</div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.tag8}>
                  <div className={styles.cooking7}>{`Power Bank `}</div>
                </div>
                <div className={styles.tag9}>
                  <div className={styles.cooking8}>Smart TV</div>
                </div>
                <div className={styles.tag10}>
                  <div className={styles.cooking9}>Speaker</div>
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.tag11}>
                  <div className={styles.cooking10}>Tablet</div>
                </div>
                <div className={styles.tag12}>
                  <div className={styles.cooking11}>Microwave</div>
                </div>
                <div className={styles.tag13}>
                  <div className={styles.cooking12}>Samsung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.kinboEcommerce}>
            Kinbo - eCommerce Template © 2021. Design by Templatecookie
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
