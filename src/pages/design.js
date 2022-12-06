import { data } from "autoprefixer";
import React,{useState,useEffect} from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";

const Design = ({ path }) => {
  // const [someData,setData]= useState(null);

  // useEffect(()=> {
  //   if(path) setData(dataSelector(path))
  // },[path])
  const data = dataSelector(path)

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
