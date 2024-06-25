import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Popup.module.css";

const Popup = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className={[styles.popup, className].join(" ")}>
      <section className={styles.productPreviewParent}>
        <div className={styles.productPreview}>
          <img
            className={styles.mainImageIcon}
            loading="lazy"
            alt=""
            src="/main-image1@2x.png"
          />
          <div className={styles.photo}>
            <img
              className={styles.thumbnailImageIcon}
              loading="lazy"
              alt=""
              src="/01@2x.png"
            />
            <img
              className={styles.thumbnailImageIcon1}
              loading="lazy"
              alt=""
              src="/05@2x.png"
            />
            <img
              className={styles.thumbnailImageIcon2}
              loading="lazy"
              alt=""
              src="/03@2x.png"
            />
            <img
              className={styles.thumbnailImageIcon3}
              loading="lazy"
              alt=""
              src="/04@2x.png"
            />
            <img
              className={styles.thumbnailImageIcon4}
              loading="lazy"
              alt=""
              src="/02@2x.png"
            />
            <img
              className={styles.thumbnailImageIcon5}
              loading="lazy"
              alt=""
              src="/06@2x.png"
            />
          </div>
        </div>
        <form className={styles.productDetail}>
          <div className={styles.productContentParent}>
            <div className={styles.productContent}>
              <div className={styles.heading}>
                <div className={styles.stars}>
                  <div className={styles.star}>
                    <img
                      className={styles.regularstarIcon}
                      loading="lazy"
                      alt=""
                      src="/regularstar.svg"
                    />
                    <img
                      className={styles.regularstarIcon1}
                      loading="lazy"
                      alt=""
                      src="/regularstar.svg"
                    />
                    <img
                      className={styles.regularstarIcon2}
                      loading="lazy"
                      alt=""
                      src="/regularstar.svg"
                    />
                    <img
                      className={styles.regularstarIcon3}
                      loading="lazy"
                      alt=""
                      src="/regularstar.svg"
                    />
                    <img
                      className={styles.regularstarIcon4}
                      loading="lazy"
                      alt=""
                      src="/regularstar.svg"
                    />
                  </div>
                  <div className={styles.starRating}>4.7 Star Rating</div>
                  <div className={styles.userFeedback}>
                    (21,671 User feedback)
                  </div>
                </div>
                <h3 className={styles.appleMacbookPro}>
                  2024 Apple MacBook Pro with Apple M3 Chip (13-inch, 8GB RAM,
                  256GB SSD Storage) - Space Gray
                </h3>
              </div>
              <div className={styles.funFact}>
                <div className={styles.row}>
                  <div className={styles.skuA264671}>
                    <span className={styles.sku}>{`Sku: `}</span>
                    <span className={styles.a264671}>A264671</span>
                  </div>
                  <div className={styles.availabilityInStockContainer}>
                    <span
                      className={styles.availability}
                    >{`Availability: `}</span>
                    <span className={styles.inStock}>In Stock</span>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.brandApple}>
                    <span className={styles.brand}>{`Brand: `}</span>
                    <span className={styles.apple}>Apple</span>
                  </div>
                  <div className={styles.categoryElectronicsDevicesContainer}>
                    <span className={styles.category}>{`Category: `}</span>
                    <span className={styles.electronicsDevices}>
                      Electronics Devices
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.offer}>
              <div className={styles.div}>$1699</div>
              <div className={styles.offerDescriptionWrapper}>
                <div className={styles.offerDescription}>$1999.00</div>
              </div>
              <div className={styles.badgeWrapper}>
                <div className={styles.badge}>
                  <div className={styles.hot}>21% OFF</div>
                </div>
              </div>
            </div>
            <div className={styles.devider} />
            <div className={styles.options}>
              <div className={styles.variantLabels}>
                <div className={styles.color}>Color</div>
                <div className={styles.size}>Size</div>
              </div>
              <div className={styles.variantOptions}>
                <div className={styles.colorDropdown}>
                  <div className={styles.colorOptions}>
                    <div className={styles.color1}>
                      <div className={styles.selectedColor} />
                    </div>
                    <div className={styles.color2}>
                      <div className={styles.dropdownIcon} />
                    </div>
                  </div>
                  <div className={styles.memory}>Memory</div>
                </div>
                <div className={styles.colorDropdown1}>
                  <div className={styles.dropdown}>
                    <div className={styles.goodMorning}>
                      14-inch Liquid Retina XDR display
                    </div>
                    <div className={styles.regularcaretdownWrapper}>
                      <img
                        className={styles.regularcaretdownIcon}
                        alt=""
                        src="/regularcaretdown-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.storage}>Storage</div>
                </div>
              </div>
              <div className={styles.storageDropdown}>
                <div className={styles.dropdown1}>
                  <div className={styles.goodMorning1}>16GB unified memory</div>
                  <div className={styles.storageCaret}>
                    <img
                      className={styles.regularcaretdownIcon1}
                      alt=""
                      src="/regularcaretdown-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.dropdown2}>
                  <div className={styles.goodMorning2}>1TV SSD Storage</div>
                  <div className={styles.regularcaretdownContainer}>
                    <img
                      className={styles.regularcaretdownIcon2}
                      alt=""
                      src="/regularcaretdown-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.quantity}>
              <div className={styles.button}>
                <input className={styles.quantityIcons} type="checkbox" />
                <div className={styles.quantityLabel}>01</div>
                <div className={styles.quantityIcons1}>
                  <img
                    className={styles.duotoneplusIcon}
                    alt=""
                    src="/duotoneplus.svg"
                  />
                </div>
              </div>
              <button className={styles.button1}>
                <b className={styles.label}>Add to card</b>
                <div className={styles.cartIcon}>
                  <img
                    className={styles.shoppingcartsimpleIcon}
                    alt=""
                    src="/shoppingcartsimple1.svg"
                  />
                </div>
              </button>
              <div className={styles.button2} onClick={onButtonContainerClick}>
                <b className={styles.label1}>BUY NOW</b>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.button3}>
                <div className={styles.addToWishlist}>
                  <img
                    className={styles.heartIcon}
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                  <div className={styles.addToWishlist1}>Add to Wishlist</div>
                </div>
                <div className={styles.addToWishlist2}>
                  <img
                    className={styles.duotonearrowsclockwiseIcon}
                    loading="lazy"
                    alt=""
                    src="/duotonearrowsclockwise.svg"
                  />
                  <div className={styles.addToWishlist3}>Add to Compare</div>
                </div>
              </div>
              <div className={styles.shareProduct}>
                <div className={styles.shareProduct1}>Share product:</div>
                <div className={styles.socialIcon}>
                  <img
                    className={styles.regularcopyIcon}
                    loading="lazy"
                    alt=""
                    src="/regularcopy.svg"
                  />
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/facebook1.svg"
                  />
                  <img
                    className={styles.twitterIcon}
                    alt=""
                    src="/twitter1.svg"
                  />
                  <img
                    className={styles.pinterestIcon}
                    alt=""
                    src="/pinterest1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.guaranteeSafeCheckout}>
              <div className={styles.guaranteeSafeCheckout1}>
                100% Guarantee Safe Checkout
              </div>
              <img
                className={styles.paymentMethodIcon}
                loading="lazy"
                alt=""
                src="/payment-method@2x.png"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Popup;
