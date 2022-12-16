import React from "react";

import { ArrowIcon } from "../../assets/images/btnsIcons/btnsIcons";

import * as styles from "./Button.module.css";

const Button = ({ additionalStyles, toggleForm, arrowColor,backgroundColor }) => {
  return (
    <button
      // style={{backgroundColor:backgroundColor}}
      className={`${styles.btn} ${additionalStyles}`}
      onClick={toggleForm}
    >
      Work with us
      <div className={styles.icon}>
        <ArrowIcon arrowColor={arrowColor} />
      </div>
    </button>
  );
};

export default Button;
