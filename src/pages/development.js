import React,{useState} from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";

const Development = ({ path }) => {
  const [data,setData] = useState(dataSelector(path));


  return <>{data ? <ServicesTools data={data} path={path} /> : null}</>;
};

export default Development;

export const Head = () => <title>Development</title>;
