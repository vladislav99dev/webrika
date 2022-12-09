import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import { useFormToggleContext } from "../../context/toggleFormContext";
import { WebrikaNavWhiteLogo } from "../../assets/images/logos/logos";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const ContentfulWebrikaLandingPages = ({
  data: { contentfulWebrikaLandingPages: project },
}) => {
  const { toggleForm } = useFormToggleContext();
  return (
    <div className="flex flex-col items-center">
      <Navbar
        toggleForm={toggleForm}
        additionalStyles={`bg-white text-[#3b485e] fixed`}
        NavLogo={WebrikaNavWhiteLogo}
        showServicesBtn="true"
      />
      {project.images.map((image, index) => {
        const imagePath = getImage(image) 
        if(index == 0 ) return <GatsbyImage image={imagePath} />;
        if(index != 0 ) return <div className="max-w-[144rem] mt-1 mb-2"> <GatsbyImage image={image.gatsbyImageData} /> </div>
      })}
    </div>
  );
};

export const query = graphql`
  query getSingleLandingPage($projectName: String) {
    contentfulWebrikaLandingPages(projectName: { eq: $projectName }) {
      projectName
      images {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default ContentfulWebrikaLandingPages;

export const Head = () => <title>Landing pages</title>;
