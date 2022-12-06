import React, { useState } from "react";
import { Link } from "gatsby";

import Button from "../Button/Button";

import { HamburgerIcon } from "../../assets/images/btnsIcons/btnsIcons";
import { CloseIconNav } from "../../assets/images/btnsIcons/btnsIcons";

import {
  ECommerceBtnIcon,
  DesignBtnIcon,
  DevelopmentBtnIcon,
  SocialMediaBtnIcon,
} from "../../assets/images/servicesLogos/servicesIcons";

import * as styles from "./Navbar.module.css";

const Navbar = ({ toggleForm, additionalStyles, NavLogo, showServicesBtn }) => {
  const isBrowser = typeof window !== "undefined";

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggler = (value) => {
    if (value === "navigation") setIsMobileNavOpen(!isMobileNavOpen);
    if (value === "services") setIsServicesOpen(!isServicesOpen);
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

        <div
          className={styles.mobileIcon}
          onClick={toggler.bind(null, "navigation")}
        >
          {isMobileNavOpen ? <CloseIconNav /> : <HamburgerIcon />}
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
          {showServicesBtn ? (
            <li
              className={styles.services}
              onClick={toggler.bind(null, "services")}
            >
              Services
              <ul
                className={
                  isServicesOpen
                    ? `${styles.servicesList} ${styles.showServices}`
                    : `${styles.servicesList} ${styles.hideServices}`
                }
              >
                <Link to="/design">
                  <li>
                    <DesignBtnIcon />
                    <p>Design</p>
                  </li>
                </Link>
                <Link to="/eCommerce">
                  <li>
                    <ECommerceBtnIcon />
                    <p>E-commerce</p>
                  </li>
                </Link>
                <Link to="/development">
                  <li>
                    <DevelopmentBtnIcon />
                    <p>Development</p>
                  </li>
                </Link>
                <Link to="/socialMedia">
                  <li>
                    <SocialMediaBtnIcon />
                    <p>Social media</p>
                  </li>
                </Link>
              </ul>
            </li>
          ) : null}

          <li>
            <Link to="/about">About us </Link>
          </li>
          <li>
            <Link to="#contact">Contact us</Link>
          </li>
          <li>
            <Link to="#">Academy</Link>
          </li>
          <li>
            <Button additionalStyles={styles.btn} toggleForm={toggleForm}/>
          </li>
        </ul>
      </nav>
      <div className={isMobileNavOpen ? `${styles.placeholder}` : null}></div>
    </>
  );
};

export default Navbar;
