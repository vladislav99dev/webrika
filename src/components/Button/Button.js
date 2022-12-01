import React from "react";

import { ArrowIcon } from "../../assets/images/btnsIcons/btnsIcons";

import * as styles from "./Button.module.css";


const Button = ({ additionalStyles, toggleForm }) => {

  return (
    <button
      className={`${styles.btn} ${additionalStyles}`}
      onClick={toggleForm}
    >
      Work with us
      <div className={styles.icon}>
        <ArrowIcon  />
      </div>
    </button>
  );
};

export default Button;
