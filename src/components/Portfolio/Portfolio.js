import React, { useEffect, useReducer } from "react";

import ProjectsListings from "../ProjectsListing/ProjectsListings";
import LandingsListing from "../LandingsListing/LandingsListing";
import MotionDesign from "../MotionDesign/MotionDesign";

import * as styles from "./Portfolio.module.css";

const initialReducerValue = {
  motionDesign: false,
  projectsListings: false,
  landingPages: false,
  slider: false,
};

const reducerToggler = (state, action) => {
  switch (action.type) {
    case "motionDesign":
      return {
        motionDesign: !state.motionDesign,
        projectsListing: false,
        landingPages: false,
        slider: false,
      };
    case "projectsListings":
      return {
        motionDesing: false,
        projectsListings: !state.projectsListings,
        landingPages: false,
        slider: false,
      };
    case "landingPages":
      return {
        motionDesing: false,
        projectsListing: false,
        landingPages: !state.landingPages,
        slider: false,
      };
    case "slider":
      return {
        motionDesing: false,
        projectsListing: false,
        landingPages: false,
        slider: !state.slider,
      };
  }
};

const Portfolio = ({ tags, portoflioInitialValue }) => {
  const [state, dispatch] = useReducer(reducerToggler, initialReducerValue);

  useEffect(() => {
    dispatch({ type: portoflioInitialValue });
  }, []);

  const toggler = (data, event) => {
    dispatch({ type: data });
  };

  const activeTagStyles = "border-yellow text-white";
  const unActiveTagStyles = "border-yellow-opacity text-[#D3D3D3]";

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.tagsContainer}>
        {tags.map((tag,index) => {
          const { data, text } = tag;
          return (
            <p key={index}
              className={`border-b-2 cursor-pointer ${
                state[data] ? activeTagStyles : unActiveTagStyles
              }`}
              onClick={toggler.bind(null, data)}
            >
              {text}
            </p>
          );
        })}
      </div>
      <div className={styles.componentConteiner}>
        {state.projectsListings ? <ProjectsListings /> : null}
        {state.landingPages ? <LandingsListing /> : null}
        {state.motionDesign ? <MotionDesign /> : null}
      </div>
    </section>
  );
};

export default Portfolio;