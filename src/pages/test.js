import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { pageData } from "../assets/data/servicesPageData";


const Test = () => {
    const {design} = pageData;

    return (
        <>
        {design.cardsData.map((item) => {
            return (
                <img src={item.image}/>
            )
        })}
        </>
    );
  };
  
  export default Test;
  
  export const Head = () => <title>Test</title>;