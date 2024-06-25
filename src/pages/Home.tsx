import { useCallback } from "react";
import Page from "../components/Page";
import Main from "../components/Main";
import Category from "../components/Category";
import FrameComponent4 from "../components/FrameComponent4";
import LatestNews from "../components/LatestNews";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <Page />
      <Main />
      <Category />
      <FrameComponent4 />
      <LatestNews />
      <Newsletter />
      <footer className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.cliconEcommerce}>
            <div className={styles.logo}>
              <img className={styles.icon} alt="" src="/icon-1.svg" />
              <h1 className={styles.clicon}>CLICON</h1>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.phoneNumber}>
                <div className={styles.customerSupports}>
                  Customer Supports:
                </div>
                <div className={styles.number}>(629) 555-0129</div>
              </div>
              <div className={styles.washingtonAveManchester}>
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
              <div className={styles.infokinbocom}>info@kinbo.com</div>
            </div>
          </div>
          <div className={styles.topCategory}>
            <div className={styles.topCategory1}>Top Category</div>
            <div className={styles.item}>
              <div className={styles.footerLinks}>
                <div className={styles.electronics}>{`Computer & Laptop`}</div>
              </div>
              <div className={styles.footerLinks1}>
                <div className={styles.electronics1}>SmartPhone</div>
              </div>
              <div className={styles.footerLinks2}>
                <a className={styles.electronics2}>Headphone</a>
              </div>
              <div className={styles.footerLinks3}>
                <div className={styles.separator}>
                  <div className={styles.devider} />
                </div>
                <div className={styles.electronics3}>Accessories</div>
              </div>
              <div className={styles.footerLinks4}>
                <div className={styles.electronics4}>{`Camera & Photo`}</div>
              </div>
              <div className={styles.footerLinks5}>
                <div className={styles.electronics5}>{`TV & Homes`}</div>
              </div>
              <div className={styles.button} onClick={onButtonContainerClick}>
                <div className={styles.browseAllProduct}>
                  Browse All Product
                </div>
                <img
                  className={styles.regulararrowrightIcon}
                  alt=""
                  src="/regulararrowright-12.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.quickLinks}>
            <div className={styles.quickLinks1}>Quick links</div>
            <div className={styles.item1}>
              <div className={styles.footerLinks6}>
                <div className={styles.electronics6}>Shop Product</div>
              </div>
              <div className={styles.footerLinks7}>
                <div className={styles.electronics7}>Shoping Cart</div>
              </div>
              <div className={styles.footerLinks8}>
                <div className={styles.electronics8}>Wishlist</div>
              </div>
              <div className={styles.footerLinks9}>
                <div className={styles.electronics9}>Compare</div>
              </div>
              <div className={styles.footerLinks10}>
                <div className={styles.electronics10}>Track Order</div>
              </div>
              <div className={styles.footerLinks11}>
                <div className={styles.electronics11}>Customer Help</div>
              </div>
              <div className={styles.footerLinks12}>
                <div className={styles.electronics12}>About Us</div>
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

export default Home;
