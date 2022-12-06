import React,{useState} from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";

const Design = ({ path }) => {
  const [data,setData] = useState(dataSelector(path));

  return (
    <>
    {data ? 
    <ServicesTools data={data} path={path}/>
    :null  
    }
    </>
  );
};

export default Design;

export const Head = () => <title>Design</title>;
