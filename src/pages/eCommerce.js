import React, { useState } from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import Portfolio from "../components/Portfolio/Portfolio";
import { dataSelector } from "../assets/data/servicesPageData";

const ECommerce = ({ path }) => {
  const [data, setData] = useState(dataSelector(path));

  return (
    <>
      {data ? <ServicesTools data={data} path={path} /> : null}
      <Portfolio
        tags={[
          { data: "projectsListings", text: "E-Commerce" },
          { data: "landingPages", text: "Landing-Pages" },
        ]}
        portoflioInitialValue = {"projectsListings"}
      />
    </>
  );
};

export default ECommerce;

export const Head = () => <title>E-Commerce</title>;
