import React from "react";

import { WebrikaTextBig } from "../../assets/images/logos/logos";
import HeroVideo from "../../assets/video/heroVideo.mp4";

import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Button from "../Button/Button";

import * as styles from "./Hero.module.css";

import Video from "../Video/Video";

const Hero = ({ toggleForm }) => {
  const HeroText = (
    <div className={styles.textContainer}>
      <WebrikaTextBig />
      <h3 className={styles.textHeading}>Digital agency</h3>
      <p className={styles.textDescription}>
        Let's work together to make your <br /> business idea a reality
      </p>
      <Button
        width={"30rem"}
        height={"5rem"}
        fontSize={"1.8rem"}
        toggleForm={toggleForm}
      />
    </div>
  );

  return (
    <section className={styles.container}>
      <Video video={HeroVideo}>{<Navbar/>}{HeroText}</Video>
      <Services />
    </section>
  );
};

export default Hero;
