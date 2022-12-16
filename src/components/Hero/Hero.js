import React, { useState } from "react";

import Video from "../Video/Video";

import AboutContent from "../HeroContents/AboutContent";
import HomeContent from "../HeroContents/HomeContent";
import ServicesContent from "../HeroContents/ServicesContent";

import HeroVideo from "../../assets/video/heroVideo.mp4";
import Navbar from "../Navbar/Navbar";
import HeroServices from "../HeroContents/HeroServices";

import {
  WebrikaHomeLogo,
  WebrikaNavWhiteLogo,
} from "../../assets/images/logos/logos";

import * as styles from "./Hero.module.css";

const Hero = ({ path, toggleForm }) => {
  const isHomePage = path === "/";

  const StyledNavigation = () => (
    <Navbar
      showServicesBtn="true"
      NavLogo={WebrikaNavWhiteLogo}
      toggleForm={toggleForm}
      additionalStyles="lg:bg-white text-[#3b485e]"
    />
  );

  return (
    <section className={isHomePage ? styles.homeContainer : null}>
      {isHomePage ? (
        <>
          <Navbar NavLogo={WebrikaHomeLogo} toggleForm={toggleForm} />
          <HomeContent toggleForm={toggleForm} />
        </>
      ) : (
        <>
          <StyledNavigation />
          {path === "/about/" ? (
            <AboutContent />
          ) : (
            <ServicesContent path={path} toggleForm={toggleForm} />
          )}
        </>
      )}
      {isHomePage ? <HeroServices /> : null}
    </section>
  );
};

export default Hero;

// {isHomePage ? (
//   <>
//     <Navbar NavLogo={WebrikaHomeLogo} toggleForm={toggleForm} />
//     <HomeContent toggleForm={toggleForm} />
//   </>
// )
// : (
//   <>
//     <StyledNavigation />
//     {path === "/about/" ? (
//       <AboutContent />
//     ) : (
//       <ServicesContent path={path} toggleForm={toggleForm} />
//     )}
//   </>
// )}
