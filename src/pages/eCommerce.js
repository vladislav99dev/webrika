import React,{useState} from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import { dataSelector } from "../assets/data/servicesPageData";

const eCommerce = ({ path }) => {
  const [data,setData] = useState(dataSelector(path));


  return <>{data ? <ServicesTools data={data} path={path} /> : null}</>;
};

export default eCommerce;

export const Head = () => <title>E-Commerce</title>;
