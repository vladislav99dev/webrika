import React from "react";

import { Link } from "gatsby";

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
        <p>
          <Link to="/design"> Webrika Design</Link>
        </p>
        <p>
          <Link to="/development">Webrika Development</Link>
        </p>
        <p>
          <Link to="/eCommerce">Webrika E-commerce</Link>
        </p>
        <p>
          <Link to="/socialMedia">Webrika Social media</Link>
        </p>
      </div>

      <div className={styles.overviews}>
        <h2 className={styles.columnHeaders}>Overview</h2>
        <p>
          <a href="http://academy.webrika.bg/">Academy</a>
        </p>
        <p>
          <Link to="/about">Abouts us</Link>
        </p>
        <p>
          <Link>Articles</Link>
        </p>
      </div>

      <div>
        <h2 className={styles.columnHeaders}>Officially in</h2>
        <div className={styles.officiallyInLogos}>
          <a href="https://www.linkedin.com/company/webrika/">
            <LinkedInBig />
          </a>

          <a href="https://www.upwork.com/ag/webrika/">
            <UpWorkBig />{" "}
          </a>
          <a href="https://clutch.co/profile/webrika#summary">
            <ClutchBig />
          </a>
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
