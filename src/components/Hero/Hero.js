import React, { useReducer, useEffect } from "react";

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

const reducerInitialValue = {
  home: true,
  about: false,
  services: false,
};

const reducerManager = (state, action) => {
  switch (action.type) {
    case "/":
      return {
        home: true,
        about: false,
        services: false,
      };
    case "/about/":
      return {
        home: false,
        about: true,
        services: false,
      };
    case "/development/":
    case "/design/":
    case "/eCommerce/":
    case "/socialMedia/":
      return {
        home: false,
        about: false,
        services: true,
      };
  }
};

const Hero = ({ path, toggleForm }) => {
  const [state, dispatch] = useReducer(reducerManager, reducerInitialValue);

  useEffect(() => {
    dispatch({ type: path });
  }, []);

  useEffect(() => {
    dispatch({ type: path });
  }, [path]);

  const StyledNavigation = () => (
    <Navbar
      showServicesBtn="true"
      NavLogo={WebrikaNavWhiteLogo}
      toggleForm={toggleForm}
      additionalStyles="lg:bg-white text-[#3b485e]"
    />
  );
  console.log(state);
  return (
    <section className={state.home ? styles.homeContainer : null}>
      <Video video={HeroVideo}>
        {state.home && (
          <>
            <Navbar NavLogo={WebrikaHomeLogo} toggleForm={toggleForm} />
            <HomeContent toggleForm={toggleForm} />
          </>
        )}

        {state.about && (
          <>
            <StyledNavigation />
            <AboutContent />
          </>
        )}

        {state.services && (
          <>
            <StyledNavigation />
            <ServicesContent path={path} toggleForm={toggleForm} />
          </>
        )}
      </Video>
      {state.home && <HeroServices />}
    </section>
  );
};

export default Hero;

{
  /* {isHomePage ? (
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
        )} */
}
