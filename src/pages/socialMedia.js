import React from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import { dataSelector } from "../assets/data/servicesPageData";

const SocialMedia = ({path}) => {
  const data = dataSelector(path);

  return (
    <>
      <ServicesTools data={data} path={path} />
    </>
  );
};

export default SocialMedia;

export const Head = () => <title>Social Media</title>;
