import React from "react";
import * as styles from "./HomeContent.module.css";
import { WebrikaTextBig } from "../../assets/images/logos/logos";
import Button from "../Button/Button";

const HomeContent = ({toggleForm}) => (
  <div className={styles.textContainer}>
    <div className={styles.textLogo}>
      <WebrikaTextBig />
    </div>

    <h3 className={styles.textHeading}>Digital agency</h3>
    <p className={styles.textDescription}>
      Let's work together to make your <br /> business idea a reality
    </p>
    <Button additionalStyles={styles.btn}  toggleForm={toggleForm}/>

  </div>
);
export default HomeContent;
