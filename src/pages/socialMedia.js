import React,{useState} from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import { dataSelector } from "../assets/data/servicesPageData";

const SocialMedia = ({ path }) => {
  const [data,setData] = useState(dataSelector(path));


  return <>{data ? <ServicesTools data={data} path={path} /> : null}</>;
};

export default SocialMedia;

export const Head = () => <title>Social Media</title>;
