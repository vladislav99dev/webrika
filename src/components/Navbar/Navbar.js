import React, { useState } from "react";
import { Link } from "gatsby";

import Button from "../Button/Button";

import { HamburgerIcon } from "../../assets/images/btnsIcons/btnsIcons";
import { CloseIconNav } from "../../assets/images/btnsIcons/btnsIcons";
import { MobileLogo } from "../../assets/images/logos/logos";

import {
  ECommerceBtnIcon,
  DesignBtnIcon,
  DevelopmentBtnIcon,
  SocialMediaBtnIcon,
} from "../../assets/images/servicesLogos/servicesIcons";

import * as styles from "./Navbar.module.css";
import { useEffect } from "react";

const Navbar = ({
  toggleForm,
  additionalStyles,
  NavLogo,
  showServicesBtn,
  btnStyling,
  path,
}) => {
  const isBrowser = typeof window !== "undefined";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState("");

  useEffect(() => {
    if (path) {
      if (path === "/development/")
        return setServicesHover(styles.developmentServicesHover);
      if (path === "/design/")
        return setServicesHover(styles.designServicesHover);
      if (path === "/eCommerce/")
        return setServicesHover(styles.eCommerceServicesHover);
      if (path === "/socialMedia/")
        return setServicesHover(styles.socialMediaServicesHover);
      if (path === "/about/")
        return setServicesHover(styles.aboutServicesHover);
    }
  }, [path]);

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
          {isMobileNavOpen && <MobileLogo />}
          <li>
            <Link to="/">Home</Link>
          </li>
          {showServicesBtn ? (
            <li
              className={`${styles.services} flex gap-x-4`}
              onClick={toggler.bind(null, "services")}
            >
              Services
              <div
                className={
                  isServicesOpen
                    ? `${styles.servicesArrow} ${styles.arrowRight}`
                    : `${styles.servicesArrow} ${styles.arrowDown}`
                }
              ></div>
              <ul
                className={
                  isServicesOpen
                    ? `${styles.servicesList} ${styles.showServices}`
                    : `${styles.servicesList} ${styles.hideServices}`
                }
              >
                <Link to="/design">
                  <li className={servicesHover}>
                    <DesignBtnIcon />
                    <p onClick={() => setIsMobileNavOpen(false)}>Design</p>
                  </li>
                </Link>
                <Link to="/eCommerce">
                  <li className={servicesHover}>
                    <ECommerceBtnIcon />
                    <p onClick={() => setIsMobileNavOpen(false)}>E-commerce</p>
                  </li>
                </Link>
                <Link to="/development">
                  <li className={servicesHover}>
                    <DevelopmentBtnIcon />
                    <p onClick={() => setIsMobileNavOpen(false)}>Development</p>
                  </li>
                </Link>
                <Link to="/socialMedia">
                  <li className={servicesHover}>
                    <SocialMediaBtnIcon />
                    <p onClick={() => setIsMobileNavOpen(false)}>
                      Social media
                    </p>
                  </li>
                </Link>
              </ul>
            </li>
          ) : null}

          <li>
            <Link to="/about">About us </Link>
          </li>
          {showServicesBtn ? null : (
            <li onClick={() => setIsMobileNavOpen(false)}>
              <Link to="#contact">Contact us</Link>
            </li>
          )}

          <li>
            <Link to="http://academy.webrika.bg/">Academy</Link>
          </li>
          <li>
            <Button
              additionalStyles={styles.btn}
              toggleForm={toggleForm}
              btnStyling={btnStyling}
            />
          </li>
        </ul>
      </nav>
      <div className={isMobileNavOpen ? `${styles.placeholder}` : null}></div>
    </>
  );
};

export default Navbar;
