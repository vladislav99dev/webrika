import React from "react";
import { graphql,Link } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import { useFormToggleContext } from "../../context/toggleFormContext";
import { WebrikaNavWhiteLogo } from "../../assets/images/logos/logos";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../components/Button/Button";

import * as styles from "./styles.module.css";

const ContentfulWebsiteProjects = ({
  data: { contentfulWebsiteProjects: project },
}) => {
  const { toggleForm } = useFormToggleContext();
  const heroImage = getImage(project.images[0]);

  return (
    <section className="flex flex-col items-center">
      <Navbar
        toggleForm={toggleForm}
        additionalStyles={`bg-white text-[#3b485e] sticky`}
        NavLogo={WebrikaNavWhiteLogo}
        showServicesBtn="true"
      />
      <div className="w-screen flex justify-center">
        <GatsbyImage image={heroImage} />
      </div>

      <div className={styles.aboutProjectText}>
        <h2 className={styles.title}>{project.longTitle}</h2>
        <p className={styles.description}>
          {project.fullDescription.fullDescription}
        </p>
        <div className={styles.technologies}>
          {project.technologiesImages.map((image) => {
            const imagePath = getImage(image);
            return (
              <div>
                <GatsbyImage image={imagePath} />
              </div>
            );
          })}
        </div>
      </div>
      <Button additionalStyles={styles.btn} toggleForm={toggleForm} />
      <div className="max-w-[144rem] mb-20 flex flex-col gap-y-4">
        {project.images.map((image, index) => {
          const imagePath = getImage(image);
          return index == 0 ? null : <GatsbyImage image={imagePath} />;
        })}
      </div>
      <div style={{backgroundColor: project.primaryColor}} className={styles.viewSiteBtnContainer}>
        <Link to={`${project.websiteLink}`}>
        <button style={{color:project.primaryColor}} className={styles.viewSiteBtn}>View site</button>
        </Link>
      </div>
    </section>
  );
};

export const query = graphql`
  query ($inSiteLink: String) {
    contentfulWebsiteProjects(inSiteLink: { eq: $inSiteLink }) {
      fullDescription {
        fullDescription
      }
      longTitle
      websiteLink
      primaryColor
      images {
        gatsbyImageData(placeholder: BLURRED)
      }
      technologiesImages {
        gatsbyImageData(placeholder: BLURRED)
      }
      inSiteLink
    }
  }
`;

export default ContentfulWebsiteProjects;
