import React, { useRef, useEffect, useState } from "react";
import * as styles from "./ServicesTools.module.css";

const ServicesTools = ({ data, path }) => {
  const cardsContainer = useRef(null);
  const [cutPath, setCutPath] = useState(path.replace("/", ""));

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      const scrollPosition = window?.scrollY;
      if (cardsContainer.current !== null) {
        const cards = Array.from(cardsContainer?.current?.children);
        let effect1 = styles[`${cutPath}First`];
        let effect2 = styles[`${cutPath}Second`];
        let effect3 = styles[`${cutPath}Third`];
        let effect4 = styles[`${cutPath}Fourth`];

        if (scrollPosition > 800) {
          cardsContainer.current.classList.add(styles.scaleContainer1);
          cards.map((tool) => {
            tool.classList.add(effect1);
          });
        }
        if (scrollPosition > 900) {
          cardsContainer.current.classList.add(styles.scaleContainer2);
          cards.map((tool) => {
            return tool.classList.add(effect2);
          });
        }
        if (scrollPosition > 1000) {
          cardsContainer.current.classList.add(styles.scaleContainer3);

          cards.map((tool) => {
            return tool.classList.add(effect3);
          });
        }
        if (scrollPosition > 1100) {
          cardsContainer.current.classList.add(styles.scaleContainer4);
          cards.map((tool) => {
            return tool.classList.add(effect4);
          });
        }
        if (scrollPosition < 1100) {
          cardsContainer.current.classList.remove(styles.scaleContainer4);
          cards.map((tool) => {
            return tool.classList.remove(effect4);
          });
        }
        if (scrollPosition < 1000) {
          cardsContainer.current.classList.remove(styles.scaleContainer3);

          cards.map((tool) => {
            return tool.classList.remove(effect3);
          });
        }
        if (scrollPosition < 900) {
          cardsContainer.current.classList.remove(styles.scaleContainer2);

          cards.map((tool) => {
            return tool.classList.remove(effect2);
          });
        }
        if (scrollPosition < 800 && scrollPosition > 790) {
          cardsContainer.current.classList.remove(styles.scaleContainer1);

          cards.map((tool) => {
            return tool.classList.remove(effect1);
          });
        }
      }
    }
  }, []);

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
          {data.headingIcons.map((icon, index) => {
            return <div key={index}>{icon}</div>;
          })}
        </div>
        <div ref={cardsContainer} className={styles.cardsContainer}>
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
