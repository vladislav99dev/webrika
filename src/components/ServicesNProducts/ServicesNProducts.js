import React from "react";

import serviceData from "../../assets/data/services.json";

import * as styles from "./ServicesNProducts.module.css";

import DesignLogo from "../../assets/images/servicesicons/designLogo.svg";

import DevelopmentLogo from "../../assets/images/servicesicons/developmentLogo.svg";
import ECommerceLogo from "../../assets/images/servicesicons/e-commerceLogo.svg";
import SocialLogo from "../../assets/images/servicesicons/socialMediaLogo.svg";

const ServicesNProducts = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.heading}>Services & Products</h2>
        <p className={styles.description}>
          We would love to help you biuld and grow your business online.Contant
          us to learn more about our solutions and how we can work together
        </p>
      </div>
      <div className={styles.servicesContainer}>
        {serviceData.services.map((service) => {
          return (
            <div
              className={
                service.title === "Design"
                  ? `${styles.serviceContainer} 
                    ${styles.primaryContainer}`
                  : `${styles.serviceContainer} 
                    ${styles.secondaryContainer}`
              }
            >
              <div className={service.title !== "Design" ? styles.logoContainer  : `${styles.logoContainer} ${styles.designLogoContainer}`}>
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
        })}
      </div>
    </section>
  );
};

export default ServicesNProducts;
