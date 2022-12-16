import React from "react";
import * as styles from "./ServicesTools.module.css";

const ServicesTools = ({ data, path }) => {
  const accordeonToggler = (event) => {
    const containerElement = event.currentTarget;
    const [heading, content] = containerElement.children;
    const classList = Array.from(content.classList);
    if (!classList.includes("h-auto"))
      content.classList.add("h-auto", "opacity-100", "z-10");
    if (classList.includes("h-auto"))
      content.classList.remove("h-auto", "opacity-100", "z-10");
  };

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
          {data.headingIcons.map((icon,index) => {
            return <div key={index}>{icon}</div>;
          })}
        </div>
        <div className={styles.cardsContainer}>
          {data.cardsData.map((card) => {
            return (
              <div
                key={card.id}
                onClick={accordeonToggler}
                className={styles.cardContainer}
              >
                <div className={styles.headingContainer}>
                  <h2 className={styles.cardHeading}>{card.heading}</h2>
                </div>

                <div className={styles.cardContentContainer}>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <div className={styles.imageContainer}>
                    <img className={styles.image} src={card.image} alt="" />
                  </div>
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
