import React from "react";
import * as styles from "./MotionVideo.module.css";

const MotionVideo = ({ videoUrl, videoUrlChanger }) => {
  return (
    <div
      onClick={() => videoUrlChanger("")}
      className={videoUrl === "" ? styles.container : styles.container}
    >
      <video className="h-[75%]" autoPlay="autoplay" loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default MotionVideo;
