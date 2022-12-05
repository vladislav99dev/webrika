import React from "react";
import * as styles from "./AboutContent.module.css"
const AboutContent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About us</h2>
      <p className={styles.description}>
        We are software development company based in Bulgaria. We specialize in
        a wide variety of a custom software solutions that fit our client's
        needs and improve their business
      </p>
    </div>
  );
};

export default AboutContent;