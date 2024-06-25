import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.billingFields, className].join(" ")}>
      <div className={styles.billingFieldsInner}>
        <div className={styles.billingInformation}>Billing Information</div>
        <div className={styles.billingInputs}>
          <div className={styles.emailCompany}>
            <div className={styles.emailCompanyInner}>
              <div className={styles.inputField}>
                <input
                  className={styles.emailAddress}
                  placeholder="Last name"
                  type="text"
                />
              </div>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyNameOptionalContainer}>
                  <span>{`Company Name `}</span>
                  <span className={styles.optional}>(Optional)</span>
                </div>
                <input className={styles.inputField1} type="text" />
              </div>
              <div className={styles.userNameAddress}>
                <div className={styles.userName}>User name</div>
                <div className={styles.userNameAddressInputs}>
                  <div className={styles.inputField2}>
                    <input
                      className={styles.emailAddress1}
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div className={styles.address}>Address</div>
                </div>
              </div>
            </div>
            <input className={styles.inputField3} type="text" />
          </div>
          <div className={styles.countryZip}>
            <FrameComponent2 country="Country" />
            <FrameComponent2 country="Region/State" />
            <FrameComponent2 country="City" />
            <div className={styles.countryZipDropdowns}>
              <div className={styles.zipCode}>Zip Code</div>
              <input className={styles.inputField4} type="text" />
            </div>
          </div>
          <div className={styles.emailPhoneNumber}>
            <div className={styles.emailContainer}>
              <div className={styles.email}>Email</div>
              <div className={styles.inputFieldParent}>
                <input className={styles.inputField5} type="text" />
                <div className={styles.fromElementsShip}>
                  <input className={styles.fromElements} type="checkbox" />
                  <div className={styles.shipIntoDifferent}>
                    Ship into different address
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.phoneNumberContainer}>
              <div className={styles.phoneNumber}>Phone Number</div>
              <input className={styles.inputField6} type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paymentHeadingParent}>
        <div className={styles.paymentHeading}>
          <div className={styles.paymentOptionsLabel}>
            <div className={styles.paymentOption}>Payment Option</div>
          </div>
          <div className={styles.paymentOption1}>
            <FrameComponent1 image10="/image-101@2x.png" razorPay="RazorPay" />
            <div className={styles.paymentMethodItems} />
            <FrameComponent1
              image10="/icon-11.svg"
              razorPay="Venmo"
              propPadding="0px 64px"
              propWidth="32px"
              propOverflow="hidden"
            />
            <div className={styles.paymentMethodItems1} />
            <FrameComponent1
              image10="/image-91@2x.png"
              razorPay="Paypal"
              propPadding="0px 64px"
              propWidth="32px"
              propOverflow="unset"
            />
            <div className={styles.paymentMethodItems2} />
            <FrameComponent1
              image10="/amazonicon1-1.svg"
              razorPay="Amazon Pay"
              propPadding="0px 64px"
              propWidth="32px"
              propOverflow="hidden"
            />
            <div className={styles.paymentMethodItems3} />
            <div className={styles.paymentMethodItems4}>
              <div className={styles.frameParent}>
                <div className={styles.duotonecreditcardWrapper}>
                  <img
                    className={styles.duotonecreditcardIcon}
                    loading="lazy"
                    alt=""
                    src="/duotonecreditcard.svg"
                  />
                </div>
                <div className={styles.debidcreditCard}>Debid/Credit Card</div>
              </div>
              <div className={styles.image11Wrapper}>
                <img
                  className={styles.image11Icon}
                  loading="lazy"
                  alt=""
                  src="/image-111@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paymentCardDetails}>
          <div className={styles.cardDetailsInputFields}>
            <div className={styles.nameNumberExpiry}>
              <div className={styles.nameOnCard}>Name on Card</div>
              <input className={styles.inputField7} type="text" />
            </div>
            <div className={styles.nameNumberExpiry1}>
              <div className={styles.cardNumber}>Card Number</div>
              <input className={styles.inputField8} type="text" />
            </div>
            <div className={styles.nameNumberExpiry2}>
              <div className={styles.expireDateParent}>
                <div className={styles.expireDate}>Expire Date</div>
                <div className={styles.inputField9}>
                  <input
                    className={styles.emailAddress2}
                    placeholder="DD/YY"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.cvcParent}>
                <div className={styles.cvc}>CVC</div>
                <input className={styles.inputField10} type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.additionalInformationParent}>
        <div className={styles.additionalInformation}>
          Additional Information
        </div>
        <div className={styles.orderNotes}>
          <div className={styles.orderNotesOptionalContainer}>
            <span>{`Order Notes `}</span>
            <span className={styles.optional1}>(Optional)</span>
          </div>
          <div className={styles.inputField11}>
            <input
              className={styles.emailAddress3}
              placeholder="Notes about your order, e.g. special notes for delivery"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
