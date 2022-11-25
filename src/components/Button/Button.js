import React from "react";

import { ArrowIcon } from "../../assets/images/btnsIcons/btnsIcons";

import * as styles from "./Button.module.css";


const Button = ({ width, height, fontSize, toggleForm }) => {
  return (
    <button
      style={{ width, height, fontSize }}
      className={`${styles.btn}`}
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
