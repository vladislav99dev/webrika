import React from "react";

const Video = ({video}) => {
  return (
    <video className="w-full h-full object-fill" autoplay="autoplay" muted loop>
      <source  src={video} type="video/mp4"/>
    </video>
  );
};

export default Video;
