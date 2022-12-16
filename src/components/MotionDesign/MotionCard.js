import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MotionCard = ({ posterImage, videoUrl, videoUrlChanger }) => {
  const pathToImage = getImage(posterImage);

  return (
    <div onClick={()=> videoUrlChanger(videoUrl)} className="w-full cursor-pointer hover:scale-[1.015] transition-all duration-200">
      <GatsbyImage image={pathToImage} alt="someImage" />
    </div>
  );
};

export default MotionCard;