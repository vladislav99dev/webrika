import React,{useEffect,useState} from "react";

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
import { useEffect } from "react";

const Hero = ({ path, toggleForm }) => {
  const [isHomePage,setIsHomePage] = useState(false)
  useEffect(() => {
    path === "/" ? setIsHomePage(true) : setIsHomePage(false)
  },[])

  const buttonColor =
    path === "/design"
      ? "#42e2b8"
      : path === "/eCommerce"
      ? "#00cdff"
      : path === "/development"
      ? "#755aba"
      : path === "#698ADC";

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
      <Video video={HeroVideo}>
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
      </Video>
      {isHomePage ? <HeroServices /> : null}
    </section>
  );
};

export default Hero;
