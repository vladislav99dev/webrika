import React, { useState } from "react";
import MotionCard from "./MotionCard";
import MotionVideo from "./MotionVideo/MotionVideo";

import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./MotionDesign.module.css";

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
      {videoUrl !== "" && (
        <MotionVideo videoUrl={videoUrl} videoUrlChanger={videoUrlChanger} />
      )}
      {videos.map((video) => {
        return (
          <MotionCard
            key={video.id}
            videoUrl={video.video.url}
            videoUrlChanger={videoUrlChanger}
            posterImage={video.poster}
          />
        );
      })}
    </div>
  );
};

export default MotionDesign;
