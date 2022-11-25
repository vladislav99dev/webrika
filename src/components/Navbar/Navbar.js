import React from "react";

import HamburgerIcon from "../../assets/images/btnsIcons/hamburgerIcon.svg";

import { Link } from "gatsby";

import Logo from "../../assets/images/webrika.svg";
import MobileLogo from "../../assets/images/mobileNavLogo.svg";
import Button from "../Button/Button";

import * as styles from "./Navbar.module.css";

const Navbar = ({ toggleForm }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) setIsMobileNavOpen(false);
  });

  return (
    <nav className={styles.navigation}>
      <Logo className={styles.desktopLogo} />
      <MobileLogo className={styles.mobileLogo} />
      <ul
        className={isMobileNavOpen ? `${styles.mobileList}` : `${styles.list}`}
      >
        <li>
          <Link to="#">Articles</Link>
        </li>
        <li onClick={toggleForm}>
          <Link to="#">Contact us</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="#">Academy</Link>
        </li>
        <li>
          <Button toggleForm={toggleForm} />
        </li>
      </ul>
      <HamburgerIcon className={styles.mobileMenu} onClick={toggleNav} />
    </nav>
  );
};

export default Navbar;
