import React from "react";
import WeAreWebrikaVideo from "../../assets/video/WeAreWebrika.mp4"

const Video = () => {
  return (
    <video src={WeAreWebrikaVideo}  autoplay="autoplay" muted loop>
      <source  src={WeAreWebrikaVideo} type="video/mp4"/>
    </video>
  );
};

export default Video;
