import React from "react";

import serviceData from "../../assets/data/services.json";

import * as styles from "./ServicesNProducts.module.css";

import { DesignLogo } from "../../assets/images/servicesIcons/servicesIcons";
import { DevelopmentLogo } from "../../assets/images/servicesIcons/servicesIcons";
import { ECommerceLogo } from "../../assets/images/servicesIcons/servicesIcons";
import { SocialLogo } from "../../assets/images/servicesIcons/servicesIcons";

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
          <div className={styles.logoContainer}>
            <DesignLogo />
          </div>
          <h3 className={styles.serviceHeading}>Design</h3>
          <p className={styles.serviceDescription}>
            Design puts your foot in the door and is the first step acquiring a
            customer.Treat it with the utmost importance.
          </p>
        </div>

        <div
          className={`${styles.serviceCotainer} ${styles.developmentContainer}`}
        >
          <div className={styles.logoContainer}>
            <DevelopmentLogo />
          </div>
          <h3 className={styles.serviceHeading}>Development</h3>
          <p className={styles.serviceDescription}>
            Businesses grow by scaling.Empower your business with the right
            tailor fitted software solutions.
          </p>
        </div>

        <div
          className={`${styles.serviceCotainer} ${styles.eCommerceContainer}`}
        >
          <div className={styles.logoContainer}>
            <ECommerceLogo />
          </div>
          <h3 className={styles.serviceHeading}>E-commerce</h3>
          <p className={styles.serviceDescription}>
            Be everywhere your customer is by having complete eCommerce
            solutions.
          </p>
        </div>

        <div className={`${styles.serviceCotainer} ${styles.socialContainer}`}>
          <div className={styles.logoContainer}>
            <SocialLogo />
          </div>
          <h3 className={styles.serviceHeading}>Social</h3>
          <p className={styles.serviceDescription}>
            Communicating through engaging content is key to attract and keep
            loyal customer base.
          </p>
        </div>

        {/* {serviceData.services.map((service) => {
          return (
            <div key={service.id} className={styles.serviceContainer}>
              <div className={styles.logoContainer}>
                {service.title === "Design" ? (
                  <DesignLogo />
                ) : service.title === "Development" ? (
                  <DevelopmentLogo />
                ) : service.title === "E-commerce" ? (
                  <ECommerceLogo />
                ) : (
                  <SocialLogo />
                )}
              </div>
              <h3 className={styles.serviceHeading}>{service.title}</h3>
            </div>
          );
        
        })} */}
      </div>
    </section>
  );
};

export default ServicesNProducts;
