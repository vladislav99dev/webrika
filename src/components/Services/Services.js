import React from "react";

import servicesData from "../../assets/data/services.json";

import * as styles from "./Services.module.css";

import DesignIcon from "../../assets/images/servicesicons/designBtnIcon.svg";
import DevelopmentIcon from "../../assets/images/servicesicons/developmentBtnIcon.svg";
import ECommerceIcon from "../../assets/images/servicesicons/e-commerceBtnIcon.svg";
import SocialIcon from "../../assets/images/servicesicons/socialMediaBtnIcon.svg";

const Services = () => {
  return (
    <aside className={styles.services}>
      <h2 className={styles.heading}>Services</h2>

      {servicesData.services.map((service) => {
        return (
          <div className={styles.serviceContainer}>
            <h2 className={styles.secondaryHeading}>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
            <button className={styles.btn}>
              View more
              {service.title === "Design" ? (
                <DesignIcon />
              ) : service.title === "Development" ? (
                <DevelopmentIcon />
              ) : service.title === "E-commerce" ? (
                <ECommerceIcon />
              ) : (
                <SocialIcon />
              )}
            </button>
          </div>
        );
      })}
    </aside>
  );
};

export default Services;
