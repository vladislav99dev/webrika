import React from "react";
import * as styles from "./ServicesTools.module.css";

const ServicesTools = ({ data, path }) => {
  return (
    <section
      className={
        path === "development"
          ? styles.developmentBg
          : path === "design"
          ? styles.designBg
          : path === "eCommerce"
          ? styles.eCommerceBg
          : path === "socialMedia"
          ? styles.socialMediaBg
          : null
      }
    >
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>{data.heading}</h2>
        <p className={styles.secondaryHeading}>{data.secondaryHeading}</p>
        <div className={styles.logosContainer}>
          {data.headingIcons.map((icon) => {
            return icon;
          })}
        </div>
        <div className={styles.cardsContainer}>
          {data.cardsData.map((card) => {
            return (
              <div className={styles.cardContainer}>
                <div className={styles.textContainer}>
                  <h2 className={styles.cardHeading}>{card.heading}</h2>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={card.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesTools;
