import React,{useState} from "react";
import { dataSelector } from "../assets/data/servicesPageData";
import ServicesTools from "../components/ServicesTools/ServicesTools";
import Portfolio from "../components/Portfolio/Portfolio"

const Design = ({ path }) => {
  const [data,setData] = useState(dataSelector(path));

  return (
    <>
    {data ? 
    <ServicesTools data={data} path={path}/>
    :null  
    }
    <Portfolio tags={[{data:"projectsListings",text:"Design"},{data:"landingPages",text:"Landing-Pages"},{data:"motionDesign",text:"Motion Design"}]}/>
    </>
  );
};

export default Design;

export const Head = () => <title>Design</title>;
