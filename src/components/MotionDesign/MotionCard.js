import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MotionCard = ({ posterImage, videoUrl, videoUrlChanger }) => {
  const pathToImage = getImage(posterImage);

  return (
    <div className="w-full">
      <GatsbyImage image={pathToImage} alt="someImage" />
    </div>
  );
};

export default MotionCard;