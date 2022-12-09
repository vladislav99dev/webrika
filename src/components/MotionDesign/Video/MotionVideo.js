import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MotionVideo = (gatsbyImageData, videoUrl) => {
  const [show, setShow] = useState(false);
  const pathToImage = getImage(gatsbyImageData);

  return (
    <>
      <GatsbyImage image={pathToImage} />
      <div>
        <video className="h-[600px]" autoPlay="autoplay" muted loop>
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default MotionVideo;
