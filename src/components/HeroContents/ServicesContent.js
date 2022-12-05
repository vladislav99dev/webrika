import React from "react";
import * as styles from "./ServicesContent.module.css";

import Button from "../Button/Button";
import {
  Design,
  Development,
  ECommerce,
  Social,
} from "../../assets/images/servicesLogos/servicesLogos";

const ServiceContent = ({ path }) => {
  const btnStyles = "w-[30rem] h-[6rem] mt-[10rem] text-white text-[2rem]";

  return (
    <div className={styles.container}>
      {path === "/design/" ? (
        <>
          <Design />
          <Button additionalStyles={`${btnStyles} bg-[#42e2b8]`} />
        </>
      ) : path === "/development/" ? (
        <>
          <Development />
          <Button additionalStyles={`${btnStyles} bg-[#755aba]`} />
        </>
      ) : path === "/eCommerce/" ? (
        <>
          <ECommerce />
          <Button additionalStyles={`${btnStyles} bg-[#00cdff]`} />
        </>
      ) : path === "/socialMedia/" ? (
        <>
          <Social />
          <Button additionalStyles={`${btnStyles} bg-[#698adc]`} />
        </>
      ) : null}
    </div>
  );
};

export default ServiceContent;
