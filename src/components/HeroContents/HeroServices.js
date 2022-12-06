import React from "react";

import servicesData from "../../assets/data/services.json";

import * as styles from "./HeroServices.module.css";

import { DesignBtnIcon } from "../../assets/images/servicesLogos/servicesIcons";
import { DevelopmentBtnIcon } from "../../assets/images/servicesLogos/servicesIcons";
import { ECommerceBtnIcon } from "../../assets/images/servicesLogos/servicesIcons";
import { SocialMediaBtnIcon } from "../../assets/images/servicesLogos/servicesIcons";

const Services = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Services</h2>

        {servicesData.services.map((service) => {
          return (
            <div key={service.id} className={styles.serviceContainer}>
              <h2 className={styles.serviceHeading}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
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
      </div>
    </aside>
  );
};

export default Services;
