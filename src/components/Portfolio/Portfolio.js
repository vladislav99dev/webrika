import React, { useState } from "react";

import ProjectsListings from "../ProjectsListing/ProjectsListings";

import * as styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [component, setComponent] = useState("siteListings");

  const changeComponent = (value) => {
    setComponent(value);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.tagsContainer}>
        <p onClick={changeComponent.bind(null, "siteListings")}>Development</p>
        <p onClick={changeComponent.bind(null, "landingPages")}>
          Landing Pages
        </p>
      </div>
      <div className={styles.componentConteiner}>
      <ProjectsListings/>
      </div>

    </section>
  );
};

export default Portfolio;
