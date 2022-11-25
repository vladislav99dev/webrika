import React from "react";


import { FooterWebrikaLogo } from "../../assets/images/logos/logos";
import { LinkedInBig } from "../../assets/images/logos/logos";
import { UpWorkBig } from "../../assets/images/logos/logos";
import { ClutchBig } from "../../assets/images/logos/logos";

import { LinkedInSmall } from "../../assets/images/logos/logos";
import { UpWorkSmall } from "../../assets/images/logos/logos";
import { ClutchSmall } from "../../assets/images/logos/logos";


import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.aboutUs}>
        <FooterWebrikaLogo />
        <p className={styles.aboutUsDesc}>
          We would love to help you biuld and grow your business online.Contact
          us to learn more about our solutions and how we can work together.
        </p>
        <div className={styles.smallLogosContainer}>
          <LinkedInSmall />
          <UpWorkSmall />
          <ClutchSmall />
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
          <LinkedInBig />
          <UpWorkBig />
          <ClutchBig />
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
