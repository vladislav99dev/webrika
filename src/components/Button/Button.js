import React from "react";

import { ArrowIcon } from "../../assets/images/btnsIcons/btnsIcons";

import * as styles from "./Button.module.css";

const Button = ({ additionalStyles, toggleForm, arrowColor,btnStyling }) => {

  return (
    <button
      className={`${styles.btn} ${additionalStyles} bg-[${btnStyling && btnStyling.bgColor}] text-${btnStyling && btnStyling.text}`}
      onClick={toggleForm}
    >
      Work with us
      <div className={styles.icon}>
        <ArrowIcon arrowColor={arrowColor || (btnStyling && btnStyling.arrowColor)} />
      </div>
    </button>
  );
};

export default Button;
