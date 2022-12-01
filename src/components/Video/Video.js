import React from "react";
import * as styles from "./Video.module.css"

const Video = ({video,children}) => {
  return (
    <div className={styles.container} >
    <video className={styles.video} autoplay="autoplay" muted loop>
      <source  src={video} type="video/mp4"/>
    </video>
      {children}
    </div>
  );
};

export default Video;
