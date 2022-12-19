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
        if (scrollPosition > 800) {
          cards.map((tool) => {
            return tool.classList.add(styles.growTools1);
          });
        }
        if (scrollPosition > 900) {
          cards.map((tool) => {
            return tool.classList.add(styles.growTools2);
          });
        }
        if (scrollPosition > 1000) {
          cards.map((tool) => {
            return tool.classList.add(styles.growTools3);
          });
        }
        if (scrollPosition > 1100) {
          cards.map((tool) => {
            return tool.classList.add(styles.growTools4);
          });
        }
        if (scrollPosition < 1100) {
          cards.map((tool) => {
            return tool.classList.remove(styles.growTools4);
          });
        }
        if (scrollPosition < 1000) {
          cards.map((tool) => {
            return tool.classList.remove(styles.growTools3);
          });
        }
        if (scrollPosition < 900) {
          cards.map((tool) => {
            return tool.classList.remove(styles.growTools2);
          });
        }
        if (scrollPosition < 800) {
          cards.map((tool) => {
            return tool.classList.remove(styles.growTools1);
          });
        }
      }
    }
  }, []);

  // useEffect(()=> {
  const initialGradient = "bg-gradient-to-b from-grey-100 to-grey-200";
  const secondGradient = `bg-gradient-to-b from-grey-200 to-${cutPath}-200`;
  const thirdGradient = `bg-gradient-to-b from-${cutPath}-200 to-${cutPath}-300`;
  const forthGradient = `bg-gradient-to-b from-${cutPath}-300 to-${cutPath}-400`;
  // },[cutPath])

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
