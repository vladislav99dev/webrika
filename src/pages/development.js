import React, { useState } from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";
import Portfolio from "../components/Portfolio/Portfolio";

const Development = ({ path }) => {
  const [data, setData] = useState(dataSelector(path));

  return (
    <>
      {data ? <ServicesTools data={data} path={path} /> : null} <Portfolio />
    </>
  );
};

export default Development;

export const Head = () => <title>Development</title>;
