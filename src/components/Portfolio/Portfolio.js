import React from "react";

import * as styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.tagsContainer}>
        <p>Development</p>
        <p>Landing Pages</p>
      </div>
    </section>
  );
};

export default Portfolio;
