import React from "react";

import servicesData from "../../assets/data/services.json";

import * as styles from "./Services.module.css";

import { DesignBtnIcon } from "../../assets/images/servicesIcons/servicesIcons";
import { DevelopmentBtnIcon } from "../../assets/images/servicesIcons/servicesIcons";
import { ECommerceBtnIcon } from "../../assets/images/servicesIcons/servicesIcons";
import { SocialMediaBtnIcon } from "../../assets/images/servicesIcons/servicesIcons";

const Services = () => {
  return (
    <aside className={styles.services}>
      <h2 className={styles.heading}>Services</h2>

      {servicesData.services.map((service) => {
        return (
          <div key={service.id} className={styles.serviceContainer}>
            <h2 className={styles.secondaryHeading}>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
            <button className={styles.btn}>
              View more
              <div className={styles.btnLogoContainer}>
                {service.title === "Design" ? (
                  <DesignBtnIcon />
                ) : service.title === "Development" ? (
                  <DevelopmentBtnIcon />
                ) : service.title === "E-commerce" ? (
                  <ECommerceBtnIcon />
                ) : (
                  <SocialMediaBtnIcon />
                )}
              </div>
            </button>
          </div>
        );
      })}
    </aside>
  );
};

export default Services;
