import React, { useState } from "react";
import { Link } from "gatsby";

import Button from "../Button/Button";

import { HamburgerIcon } from "../../assets/images/btnsIcons/btnsIcons";
import { WebrikaMobileLogo } from "../../assets/images/logos/logos";
import { WebrikaDesktopLogo } from "../../assets/images/logos/logos";

import * as styles from "./Navbar.module.css";

const Navbar = ({ toggleForm, backgroundColor, width, NavLogo }) => {
  const isBrowser = typeof window !== "undefined";

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  if (isBrowser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) setIsMobileNavOpen(false);
    });
  }

  return (
    <nav
      className={
        isMobileNavOpen
          ? `${styles.navigation} ${styles.showNav}`
          : `${styles.navigation} ${styles.hideNav}`
      }
    >
      <div className={styles.desktopLogo}>
        <WebrikaDesktopLogo />
      </div>

      {/* <div className={styles.mobileLogo}>
        <WebrikaMobileLogo />
      </div> */}

      <ul
        className={isMobileNavOpen ? `${styles.mobileList} ${styles.showNavList}` : `${styles.list}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us </Link>
        </li>
        <li onClick={toggleForm}>
          <Link to="#contact">Contact us</Link>
        </li>
        <li>
          <Link to="#">Academy</Link>
        </li>
        <li>
          <Button additionalStyles={styles.btn} toggleForm={toggleForm} />
        </li>
      </ul>
      <div className={styles.mobileMenu} onClick={toggleNav}>
        <HamburgerIcon />
      </div>
      {/* <div className={styles.mobileMenu} onClick={toggleNav}>
        <HamburgerIcon />
      </div> */}
    </nav>
  );
};

export default Navbar;
