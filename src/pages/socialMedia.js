import React, { useState } from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import Portfolio from "../components/Portfolio/Portfolio";
import { dataSelector } from "../assets/data/servicesPageData";

const SocialMedia = ({ path }) => {
  const [data, setData] = useState(dataSelector(path));

  return (
    <>
      {data ? <ServicesTools data={data} path={path} /> : null} 
      <Portfolio tags={[{data:"slider",text:"Slider"},{data:"motionDesign",text:"Motion Design"}]} portoflioInitialValue={"slider"}/>
    </>
  );
};

export default SocialMedia;

export const Head = () => <title>Social Media</title>;
