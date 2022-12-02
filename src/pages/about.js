import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import AboutContent from "../components/About/AboutContent";
import OurTeam from "../components/OurTeam/OurTeam";
import Video from "../components/Video/Video";
import HeroVideo from "../assets/video/heroVideo.mp4";
import {WebrikaNavWhiteLogo} from  "../assets/images/logos/logos"
import {useFormToggleContext} from "../context/toggleFormContext"

import "../styles/global.css";

const About = () => {
  const {toggleForm} = useFormToggleContext()
  return (
    <>
      <Video video={HeroVideo}>
        {
          <>
            <Navbar NavLogo={WebrikaNavWhiteLogo} toggleForm={toggleForm} additionalStyles="lg:bg-white text-[#3b485e]" />
            <AboutContent />
          </>
        }
      </Video>
      <OurTeam />
    </>
  );
};

export default About;

export const Head = () => <title>About Page</title>;
