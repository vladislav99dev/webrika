import React from "react";

import {MonitorImage} from "../../assets/images/monitorImage"

import * as styles from "./Video.module.css";

const Video = () => {
  return (
    <section className={styles.container}>
      <p className={styles.placeholder}>Video</p>
      <div className={styles.mobileContent}>

      <h2 className={styles.heading}>Lorem ipsum ipsum dolor</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, sectetur adipiscing elit,In frungila arcu
        lacina sodales porta. Lorem ipsum dolor sit amet, sectetur adispiscing
        elit. in frigila arcu lacinia sodales porta
      </p>
      <MonitorImage className={styles.monitorImage}/>
      </div>
    </section>
  );
};

export default Video;
