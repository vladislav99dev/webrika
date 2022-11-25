import React from "react";

import { WebrikaTextBig } from "../../assets/images/logos/logos";

import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Button from "../Button/Button";

import * as styles from "./Hero.module.css";

const Hero = ({ toggleForm }) => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.gradient}>
          <Navbar toggleForm={toggleForm} />

          <div className={styles.textContainer}>
            <WebrikaTextBig className={styles.textLogo} />
            <h3 className={styles.textHeading}>Digital agency</h3>
            <p className={styles.textDescription}>
              Let's work together to make your <br /> business idea a reality
            </p>
            <Button
              width={"24rem"}
              height={"4.5rem"}
              fontSize={"1.8rem"}
              toggleForm={toggleForm}
            />
          </div>
        </div>
      </div>
      <Services className={styles.services} />
    </section>
  );
};

export default Hero;
