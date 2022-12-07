import React from "react";
import * as styles from "./ServicesContent.module.css";

import Button from "../Button/Button";
import {
  Design,
  Development,
  ECommerce,
  Social,
} from "../../assets/images/servicesLogos/servicesLogos";

const ServiceContent = ({ path,toggleForm }) => {


  return (
    <div className={styles.container}>
      {path === "/design/" ? (
        <>
          <Design />
          <Button toggleForm={toggleForm} additionalStyles={`${styles.btnStyles} bg-[#42e2b8]`} arrowColor={'white'} />
        </>
      ) : path === "/development/" ? (
        <>
          <Development />
          <Button toggleForm={toggleForm} additionalStyles={`${styles.btnStyles} bg-[#755aba]`} arrowColor={'white'} />
        </>
      ) : path === "/eCommerce/" ? (
        <>
          <ECommerce />
          <Button  toggleForm={toggleForm} additionalStyles={`${styles.btnStyles} bg-[#00cdff]`} arrowColor={'white'}/>
        </>
      ) : path === "/socialMedia/" ? (
        <>
          <Social />
          <Button toggleForm={toggleForm}  additionalStyles={`${styles.btnStyles} bg-[#698adc]`} arrowColor={'white'}/>
        </>
      ) : null}
    </div>
  );
};

export default ServiceContent;
