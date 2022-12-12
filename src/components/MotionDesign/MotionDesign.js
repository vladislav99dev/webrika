import React, { useState } from "react";
import MotionVideo from "./Video/MotionVideo";

import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./MotionDesign.module.css"

const MotionDesign = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const videoUrlChanger = (url) => {
    setVideoUrl(url);
  };

  const {
    allContentfulMotionDesign: { nodes: videos },
  } = useStaticQuery(graphql`
    query {
      allContentfulMotionDesign {
        nodes {
          id
          video {
            url
          }
          poster {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return <MotionVideo
          key={video.id}
          videoUrl={video.video.url}
          videoUrlChanger={videoUrlChanger}
          posterImage={video.poster}
        />;
      })}
    </div>
  );
};

{/* <video className="h-[600px]" autoPlay="autoplay" muted loop>
<source
  src={videoUrl}
  type="video/mp4"
/>
</video> */}

export default MotionDesign;
