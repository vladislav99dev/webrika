import React,{useState,useEffect} from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";

const Design = ({ path }) => {
  const [someData,setData]= useState(null);

  useEffect(()=> {
    if(path) setData(dataSelector(path))
  },[path])


  return (
    <>
    {someData ? 
    <ServicesTools data={someData} path={path}/>
    :null  
    }
    </>
  );
};

export default Design;

export const Head = () => <title>Design</title>;
