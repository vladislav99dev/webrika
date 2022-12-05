import React from "react";

import { CloseIcon } from "../../assets/images/btnsIcons/btnsIcons";

import * as styles from "./Form.module.css";

const Form = ({isFormOpen,toggleForm}) => {
  return (
    <section
      className={
        isFormOpen
          ? `${styles.container} ${styles.showContainer}`
          : `${styles.container} ${styles.hideContainer}`
      }
    >
      <div className={styles.overlay} onClick={toggleForm}></div>
      <form
        className={
          isFormOpen
            ? `${styles.form} ${styles.showForm}`
            : `${styles.form} ${styles.hideForm}`
        }
      >
        <div className={styles.header}>
          <div className={styles.closeIcon} onClick={toggleForm}>
            <CloseIcon />
          </div>
          <h2 className={styles.heading}>Submission</h2>
        </div>
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="name" id="name">
              Your Name
            </label>
            <input type="text" name="name" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email" id="email">
              Your email address
            </label>
            <input type="text" name="email" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="number" id="phoneNumber">
              Your phone number
            </label>
            <input type="number" name="number" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="number" id="request">
              Request
            </label>
            <textarea name="request" id="request"></textarea>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
