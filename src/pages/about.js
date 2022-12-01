import * as React from "react";

import Navbar from "../components/Navbar/Navbar"
import AboutContent from "../components/About/AboutContent";
import OurTeam from "../components/OurTeam/OurTeam";
import Video from "../components/Video/Video";
import HeroVideo from "../assets/video/heroVideo.mp4";
import "../styles/global.css";

const About = () => {


  return (
    <>
      <Video video={HeroVideo}>{<><Navbar/> <AboutContent/> </>}</Video>
      <OurTeam />
    </>
  );
};

export default About;

export const Head = () => <title>About Page</title>;
