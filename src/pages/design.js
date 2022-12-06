import React from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";

const Design = ({ path }) => {
  const data = dataSelector(path);
  return (
    <>
      <ServicesTools data={data} path={path}/>
    </>
  );
};

export default Design;

export const Head = () => <title>Design</title>;
