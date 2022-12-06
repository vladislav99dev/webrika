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
  const btnStyles = "w-[30rem] h-[6rem] mt-[10rem] text-white text-[2rem]";

  return (
    <div className={styles.container}>
      {path === "/design/" ? (
        <>
          <Design />
          <Button toggleForm={toggleForm} additionalStyles={`${btnStyles} bg-[#42e2b8]`} arrowColor={'white'} />
        </>
      ) : path === "/development/" ? (
        <>
          <Development />
          <Button toggleForm={toggleForm} additionalStyles={`${btnStyles} bg-[#755aba]`} arrowColor={'white'} />
        </>
      ) : path === "/eCommerce/" ? (
        <>
          <ECommerce />
          <Button  toggleForm={toggleForm} additionalStyles={`${btnStyles} bg-[#00cdff]`} arrowColor={'white'}/>
        </>
      ) : path === "/socialMedia/" ? (
        <>
          <Social />
          <Button toggleForm={toggleForm}  additionalStyles={`${btnStyles} bg-[#698adc]`} arrowColor={'white'}/>
        </>
      ) : null}
    </div>
  );
};

export default ServiceContent;
