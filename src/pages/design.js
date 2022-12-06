import React from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";

const Design = ({ path }) => {
  let data = dataSelector(path);
  if(!data) data = {};
  return (
    <>
      <ServicesTools data={data} path={path}/>
    </>
  );
};

export default Design;

export const Head = () => <title>Design</title>;
