import MiddleNav from "../components/MiddleNav";
import Breadcrumb3 from "../components/Breadcrumb3";
import FrameComponent5 from "../components/FrameComponent5";
import Products1 from "../components/Products1";
import Pagination from "../components/Pagination";
import CliconECommerce from "../components/CliconECommerce";
import TopCategory from "../components/TopCategory";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.navigation}>
        <div className={styles.widget}>
          <img
            className={styles.blackIcon}
            loading="lazy"
            alt=""
            src="/black3@2x.png"
          />
          <div className={styles.closeIcon}>
            <a className={styles.friday}>Friday</a>
          </div>
          <div className={styles.discountWrapper}>
            <div className={styles.discount}>
              <div className={styles.upToWrapper}>
                <a className={styles.upTo}>Up to</a>
              </div>
              <a className={styles.offContainer}>59%</a>
              <div className={styles.offWrapper}>
                <a className={styles.off}>OFF</a>
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <a className={styles.label}>Shop now</a>
            <div className={styles.regulararrowrightWrapper}>
              <img
                className={styles.regulararrowrightIcon}
                alt=""
                src="/regulararrowright.svg"
              />
            </div>
          </button>
          <div className={styles.closeButtonWrapper}>
            <div className={styles.closeButton}>
              <img className={styles.duotonexIcon} alt="" src="/duotonex.svg" />
            </div>
          </div>
        </div>
        <header className={styles.navigation1}>
          <div className={styles.topNav}>
            <div
              className={styles.welcomeToClicon}
            >{`Welcome to Clicon online eCommerce store. `}</div>
            <div className={styles.leftContent}>
              <div className={styles.followUs}>
                <div className={styles.followUs1}>Follow us:</div>
                <div className={styles.socialIcon}>
                  <img
                    className={styles.twitterIcon}
                    alt=""
                    src="/twitter.svg"
                  />
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/facebook.svg"
                  />
                  <img
                    className={styles.pinterestIcon}
                    alt=""
                    src="/pinterest.svg"
                  />
                  <img className={styles.redditIcon} alt="" src="/reddit.svg" />
                  <img
                    className={styles.youtubeIcon}
                    alt=""
                    src="/youtube.svg"
                  />
                  <img
                    className={styles.instagramIcon}
                    alt=""
                    src="/instagram.svg"
                  />
                </div>
              </div>
              <div className={styles.leftContentChild} />
              <div className={styles.multiLanguagedrodpwon}>
                <div className={styles.dropdown}>
                  <div className={styles.eng}>Eng</div>
                  <img
                    className={styles.regularcaretdownIcon}
                    alt=""
                    src="/regularcaretdown.svg"
                  />
                </div>
              </div>
              <div className={styles.multiCurrencydropdown}>
                <div className={styles.dropdown1}>
                  <div className={styles.usd}>USD</div>
                  <img
                    className={styles.regularcaretdownIcon1}
                    alt=""
                    src="/regularcaretdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <MiddleNav
            cartIcon="pending_I154:2857;1:2578;305:2042;316:1608"
            middleNavPadding="20px"
            middleNavGap="176.5px"
          />
          <div className={styles.bottomNav}>
            <div className={styles.leftSide}>
              <div className={styles.category}>
                <div className={styles.button1}>
                  <div className={styles.allCategory}>All Category</div>
                  <div className={styles.regularcaretdownWrapper}>
                    <img
                      className={styles.regularcaretdownIcon2}
                      alt=""
                      src="/regularcaretdown-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.breadcrumbs}>
                <div className={styles.trackOrder}>
                  <img
                    className={styles.regularmappinlineIcon}
                    alt=""
                    src="/regularmappinline.svg"
                  />
                  <div className={styles.trackOrderWrapper}>
                    <div className={styles.trackOrder1}>Track Order</div>
                  </div>
                </div>
              </div>
              <div className={styles.breadcrumbs1}>
                <div className={styles.compare}>
                  <input
                    className={styles.duotonearrowscounterclockwise}
                    type="radio"
                  />
                  <div className={styles.compareWrapper}>
                    <a className={styles.compare1}>Compare</a>
                  </div>
                </div>
              </div>
              <div className={styles.breadcrumbs2}>
                <div className={styles.customerSupport}>
                  <img
                    className={styles.regularheadphonesIcon}
                    alt=""
                    src="/regularheadphones.svg"
                  />
                  <div className={styles.customerSupportWrapper}>
                    <div className={styles.customerSupport1}>
                      Customer Support
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.needHelpWrapper}>
                <div className={styles.needHelp}>
                  <img
                    className={styles.regularinfoIcon}
                    alt=""
                    src="/regularinfo.svg"
                  />
                  <div className={styles.needHelpContainer}>
                    <div className={styles.needHelp1}>Need Help</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.callNowWrapper}>
              <div className={styles.callNow}>
                <img
                  className={styles.regularphonecallIcon}
                  alt=""
                  src="/regularphonecall.svg"
                />
                <div className={styles.wrapper}>
                  <div className={styles.div}>+1-202-555-0104</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Breadcrumb3 />
      <main className={styles.productList}>
        <section className={styles.productGrid}>
          <FrameComponent5 />
          <Products1 />
        </section>
        <div className={styles.pageNavigation}>
          <Pagination />
        </div>
      </main>
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

export default Products;
