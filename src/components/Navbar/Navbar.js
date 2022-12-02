import React, { useState } from "react";
import { Link } from "gatsby";

import Button from "../Button/Button";

import { HamburgerIcon } from "../../assets/images/btnsIcons/btnsIcons";
import { CloseIconNav } from "../../assets/images/btnsIcons/btnsIcons";
import { WebrikaMobileLogo } from "../../assets/images/logos/logos";

import * as styles from "./Navbar.module.css";

const Navbar = ({ toggleForm,additionalStyles, NavLogo }) => {
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
    <>
    <nav
      className={
        isMobileNavOpen
        ? `${styles.navigation} ${additionalStyles} ${styles.showMobileNavigation}`
        : `${styles.navigation} ${additionalStyles}`
      }
      >
      <Link to="/" className={styles.desktopLogo}>
        <NavLogo />
      </Link>

      <div className={styles.mobileIcon} onClick={toggleNav}>
        {isMobileNavOpen ? <CloseIconNav/> : <HamburgerIcon/>}
      </div>

      <ul
        className={
          isMobileNavOpen
          ? `${styles.links} ${styles.showLinks}`
          : `${styles.links} ${styles.hideLinks}`
        }
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
    </nav>
    <div className={isMobileNavOpen ? `${styles.placeholder}`: null}></div>
    </>
  );
};

export default Navbar;
