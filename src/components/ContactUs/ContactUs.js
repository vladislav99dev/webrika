import React from "react";

import Button from "../Button/Button";

import * as styles from "./ContactUs.module.css";

const ContactUs = ({ toggleForm }) => {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Contact us</h2>
      <p className={styles.pInformation}>Contact information</p>
      <div className={styles.contactsContainer}>
        <p className={styles.labels}>Contact person:</p>
        <p className={styles.information}>George Prusiyski</p>
        <p className={styles.labels}>Contact number:</p>
        <p className={styles.information}>+359 87 873 5795</p>
        <p className={styles.labels}>Contact email:</p>
        <p className={styles.information}>g.prusiyski@webrika.bg</p>
      </div>
      <Button
      additionalStyles={styles.btn}
        toggleForm={toggleForm}
      />
    </section>
  );
};

export default ContactUs;
