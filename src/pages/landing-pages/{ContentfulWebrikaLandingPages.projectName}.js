import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import { useFormToggleContext } from "../../context/toggleFormContext";
import { WebrikaNavWhiteLogo } from "../../assets/images/logos/logos";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.css";

const ContentfulWebrikaLandingPages = ({
  data: { contentfulWebrikaLandingPages: project },
}) => {

  const { toggleForm } = useFormToggleContext();
  console.log(project.images[0]);
  return (
    <>
      <Navbar
        toggleForm={toggleForm}
        additionalStyles={`bg-white text-[#3b485e] static`}
        NavLogo={WebrikaNavWhiteLogo}
        showServicesBtn="true"
      />
      {project.images.map((image) => {
        return (
            <GatsbyImage image={image.gatsbyImageData} />
        )
      })}
    </>
  );
};

export const query = graphql`
  query getSingleRecipe($projectName: String) {
    contentfulWebrikaLandingPages(projectName: { eq: $projectName }) {
      projectName
      images {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default ContentfulWebrikaLandingPages;
