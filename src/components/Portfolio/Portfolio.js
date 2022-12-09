import React, { useState } from "react";

import ProjectsListings from "../ProjectsListing/ProjectsListings";
import LandingsListing from "../LandingsListing/LandingsListing";
import MotionDesign from "../MotionDesign/MotionDesign";

import * as styles from "./Portfolio.module.css";

const Portfolio = ({ websiteListingName }) => {
  const [component, setComponent] = useState("siteListings");

  const changeComponent = (value) => {
    setComponent(value);
  };

  const listingStyles = `${
    component === "siteListings"
      ? "border-yellow text-white"
      : "border-yellow-opacity text-[#D3D3D3]"
  }`;
  const landingStyles = `border-b-2 ${
    component === "landingPages"
      ? "border-yellow text-white"
      : "border-yellow-opacity text-[#D3D3D3]"
  }`;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.tagsContainer}>
        <p
          className={`border-b-2 cursor-pointer ${listingStyles} `}
          onClick={changeComponent.bind(null, "siteListings")}
        >
          {websiteListingName}
        </p>
        <p
          className={`border-b-2 cursor-pointer ${landingStyles} `}
          onClick={changeComponent.bind(null, "landingPages")}
        >
          Landing Pages
        </p>
      </div>
      <div className={styles.componentConteiner}>
        {component === "siteListings" ? <ProjectsListings /> : null}
        {component === "landingPages" ? <LandingsListing /> : null}
      </div>
      <MotionDesign />
    </section>
  );
};

export default Portfolio;
