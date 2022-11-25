import React from "react";

import Logo from "../../assets/images/footerLogo.svg";
import LinkedInBig from "../../assets/images/linkedInBig.svg"
import UpWorkBig from "../../assets/images/upWorkBig.svg"
import ClutchBig from "../../assets/images/clutchBig.svg"

import LinkedInSmall from "../../assets/images/linkedInSmall.svg"
import UpWorkSmall from "../../assets/images/upWorkSmall.svg"
import ClutchSmall from "../../assets/images/clutchSmall.svg"

import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.aboutUs}>
        <Logo />
        <p className={styles.aboutUsDesc}>
          We would love to help you biuld and grow your business online.Contact
          us to learn more about our solutions and how we can work together.
        </p>
        <div className={styles.smallLogosContainer}>
          <LinkedInSmall/>
          <UpWorkSmall/>
          <ClutchSmall/>
        </div>

      </div>

      <div className={styles.departments}>
        <h2 className={styles.columnHeaders}>Deparments</h2>
        <p>Webrika Design</p>
        <p>Webrika Development</p>
        <p>Webrika E-commerce</p>
        <p>Webrika Social media</p>
      </div>

      <div className={styles.overviews}>
        <h2 className={styles.columnHeaders}>Overview</h2>
        <p>Academy</p>
        <p>Abouts us</p>
        <p>Articles</p>
      </div>

      <div>
        <h2 className={styles.columnHeaders}>Officially in</h2>
        <div className={styles.officiallyInLogos}>
        <LinkedInBig/>
        <UpWorkBig/>
        <ClutchBig/>
        </div>
      </div>

      <div className={styles.copyRightContainer}>
        <div className={styles.copyRightLine}></div>
        <p>Copyright Webrika 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
