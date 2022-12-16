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

const portfolioToggler = (state, action) => {
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
  const [state, dispatch] = useReducer(portfolioToggler, initialReducerValue);
  console.log(portoflioInitialValue);

  useEffect(() => {
    dispatch({ type: portoflioInitialValue });
  }, []);

  const toggler = (data, event) => {
    dispatch({ type: data });
    console.log(state[data]);
  };

  const activeTagStyles = "border-yellow text-white";
  const unActiveTagStyles = "border-yellow-opacity text-[#D3D3D3]";

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.tagsContainer}>
        {tags.map((tag) => {
          const { data, text } = tag;
          return (
            <p
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
//   const [component, setComponent] = useState("siteListings");

//   const changeComponent = (value) => {
//     setComponent(value);
//   };

//   const listingStyles = `${
//     component === "siteListings"
//       ? "border-yellow text-white"
//       : "border-yellow-opacity text-[#D3D3D3]"
//   }`;
//   const landingStyles = `border-b-2 ${
//     component === "landingPages"
//       ? "border-yellow text-white"
//       : "border-yellow-opacity text-[#D3D3D3]"
//   }`;

//   return (
//     <section className={styles.container}>
//       <h2 className={styles.heading}>Portfolio</h2>
//       <div className={styles.tagsContainer}>
//         <p
//           className={`border-b-2 cursor-pointer ${listingStyles} `}
//           onClick={changeComponent.bind(null, "siteListings")}
//         >
//           {websiteListingName}
//         </p>
//         <p
//           className={`border-b-2 cursor-pointer ${landingStyles} `}
//           onClick={changeComponent.bind(null, "landingPages")}
//         >
//           Landing Pages
//         </p>
//       </div>
//       <div className={styles.componentConteiner}>
//         {component === "siteListings" ? <ProjectsListings /> : null}
//         {component === "landingPages" ? <LandingsListing /> : null}
//       </div>
//       <MotionDesign />
//     </section>
//   );
// };
