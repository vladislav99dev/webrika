import React,{useState} from "react";

import ServicesTools from "../components/ServicesTools/ServicesTools";
import Portfolio from "../components/Portfolio/Portfolio"
import { dataSelector } from "../assets/data/servicesPageData";

const ECommerce = ({ path }) => {
  const [data,setData] = useState(dataSelector(path));


  return <>
  {data ? <ServicesTools data={data} path={path} /> : null}
  <Portfolio websiteListingName="E-Commerce"/>
  </>;
};

export default ECommerce;

export const Head = () => <title>E-Commerce</title>;
