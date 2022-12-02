import React from "react";

import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import HomeHero from "../HomeHero/HomeHero";
import Video from "../Video/Video";
import HeroVideo from "../../assets/video/heroVideo.mp4";
import Navbar from "../Navbar/Navbar";
import AboutContent from "../About/AboutContent";
import Button from "../Button/Button";

import { useFormToggleContext } from "../../context/toggleFormContext";
import { WebrikaHomeLogo } from "../../assets/images/logos/logos";
import { WebrikaNavWhiteLogo } from "../../assets/images/logos/logos";

import {Design} from "../../assets/images/servicesLogos/servicesLogos"
import { Development } from "../../assets/images/servicesLogos/servicesLogos";
import { ECommerce } from "../../assets/images/servicesLogos/servicesLogos";
import { Social } from "../../assets/images/servicesLogos/servicesLogos";

const Layout = (props) => {
  const { isFormOpen, toggleForm } = useFormToggleContext();

  const btnStyles = "w-[30rem] h-[6rem] mt-[10rem] text-white text-[2rem]"
  return (
    <>
      <Form isFormOpen={isFormOpen} toggleForm={toggleForm} />
      {props.path === "/" ? (
        <HomeHero
          NavLogo={WebrikaHomeLogo}
          isFormOpen={isFormOpen}
          toggleForm={toggleForm}
        />
      ) : props.path === "/about/" ? (
        <Video video={HeroVideo}>
          {
            <>
              <Navbar
                NavLogo={WebrikaNavWhiteLogo}
                toggleForm={toggleForm}
                additionalStyles="lg:bg-white text-[#3b485e]"
              />
              <AboutContent />
            </>
          }
        </Video>
      ) : (
        <Video video={HeroVideo}>
          {
            <>
              <Navbar
                NavLogo={WebrikaNavWhiteLogo}
                toggleForm={toggleForm}
                additionalStyles="lg:bg-white text-[#3b485e]"
              />
              <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center w-full">
              { props.path === "/design/" 
              ? 
              <>
              <Design/> 
              <Button arrowColor="white" additionalStyles={`${btnStyles} bg-[#42e2b8]`}/>
              </>
              : props.path ==="/development/" ?
              <>
              <Development/>
              <Button arrowColor="white" additionalStyles={`${btnStyles} bg-[#755aba]`}/>
              </>
              : props.path === "/eCommerce/" ?
              <>
              <ECommerce/>
              <Button arrowColor="white"  additionalStyles={`${btnStyles} bg-[#00cdff]`}/>
              </>
              : 
              <>
              <Social/>
              <Button arrowColor="white" additionalStyles={`${btnStyles} bg-[#698adc]`}/>
              </>
              }
              </div>
            </>
          }
        </Video>
      )}

      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
