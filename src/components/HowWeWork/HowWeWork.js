import React from "react";

import howWeWorkData from "../../assets/data/howWeWork.json";
import Button from "../Button/Button"

import * as styles from "./HowWeWork.module.css";

const HowWeWork = ({toggleForm}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>How we work</h2>
      <div className={styles.stepsContainer}>
        {howWeWorkData.howWeWork.map((item, index) => {
          return (
            <div className={styles.stepContainer}>
              <h3 className={styles.stepHeading}>{item.title}</h3>
                <p className={styles.stepNumber}>{index + 1}</p>
              <p className={styles.stepDescription}>
                {item.description}
              </p>
              <div className={styles.underline}></div>
            </div>
          );
        })}
      </div>
        <Button width={'24rem'} height={'4.5rem'} fontSize={'1.8rem'} toggleForm={toggleForm}/>
    </section>
  );
};

export default HowWeWork;
