import React from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import { dataSelector } from "../assets/data/servicesPageData";

const eCommerce = ({ path }) => {
  let data = dataSelector(path);
  if(!data) data = null;
  return (
    <>
      <ServicesTools data={data} path={path} />
    </>
  );
};

export default eCommerce;

export const Head = () => <title>E-Commerce</title>;
