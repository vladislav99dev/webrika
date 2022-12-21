import React from "react";
import { Link } from "gatsby";

import * as styles from "./ServicesNProducts.module.css";

import { DesignLogo } from "../../assets/images/servicesLogos/servicesIcons";
import { DevelopmentLogo } from "../../assets/images/servicesLogos/servicesIcons";
import { ECommerceLogo } from "../../assets/images/servicesLogos/servicesIcons";
import { SocialLogo } from "../../assets/images/servicesLogos/servicesIcons";

const ServicesNProducts = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Services & Products</h2>
      <p className={styles.description}>
        Having a reliable technology partner empowers you to make the right
        decisions for your business
      </p>

      <div className={styles.servicesContainer}>
        <div className={`${styles.serviceCotainer} ${styles.designContainer}`}>
          <Link to="/design">
            <div className={styles.contentContainer}>
              <DesignLogo />

              <h3 className={styles.serviceHeading}>Design</h3>
              <p className={styles.serviceDescription}>
                Design puts your foot in the door and is the first step
                acquiring a customer.Treat it with the utmost importance.
              </p>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.serviceCotainer} ${styles.developmentContainer}`}
        >
          <Link to="/development">
          <div className={styles.contentContainer}>
            <DevelopmentLogo />
            <h3 className={styles.serviceHeading}>Development</h3>
            <p className={styles.serviceDescription}>
              Businesses grow by scaling.Empower your business with the right
              tailor fitted software solutions.
            </p>
          </div>
          </Link>
        </div>

        <div
          className={`${styles.serviceCotainer} ${styles.eCommerceContainer}`}
        >
          <Link to="/eCommerce">
          <div className={styles.contentContainer}>
            <ECommerceLogo />
            <h3 className={styles.serviceHeading}>E-commerce</h3>
            <p className={styles.serviceDescription}>
              Be everywhere your customer is by having complete eCommerce
              solutions.
            </p>
          </div>
          </Link>
        </div>

        <div className={`${styles.serviceCotainer} ${styles.socialContainer}`}>
          <Link to="/socialMedia">
          <div className={styles.contentContainer}>
            <SocialLogo />
            <h3 className={styles.serviceHeading}>Social</h3>
            <p className={styles.serviceDescription}>
              Communicating through engaging content is key to attract and keep
              loyal customer base.
            </p>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesNProducts;
