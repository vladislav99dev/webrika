import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./ProjectsListing.module.css";

const ProjectsListings = () => {
  const {
    allContentfulWebsiteProjects: { nodes: projects },
  } = useStaticQuery(graphql`
    query {
      allContentfulWebsiteProjects {
        nodes {
          posterImage {
            gatsbyImageData(
              quality: 100
              resizingBehavior: FILL
              placeholder: BLURRED
              
            )
          }
          inSiteLink
          id
          smallDescription {
            smallDescription
          }
        }
      }
    }
  `);
  return (
    <section className={styles.container}>
      {projects.map((project) => {
        const pathToImage = getImage(project.posterImage);
        let projectName = project.inSiteLink.slice(10, [
          project.inSiteLink.length,
        ]);
        if (projectName.includes("-"))
          projectName = projectName.replace("-", "");
          console.log(projectName);
        let className = styles[`${projectName}`];
        if (className === "undefined") className = "";

        return (
          <div className={`${className} w-full [&>div]:w-full`} key={project.id}>
            <GatsbyImage image={pathToImage} alt="someImage" />
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsListings;
