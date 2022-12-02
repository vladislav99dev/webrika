import React from "react";

import { ArrowIcon } from "../../assets/images/btnsIcons/btnsIcons";

import * as styles from "./Button.module.css";

const Button = ({ additionalStyles, toggleForm, arrowColor }) => {
  return (
    <button
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
