import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
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
          title
        }
      }
    }
  `);
  
  return (
    <section className={styles.container}>
      {projects.map((project) => {
        const pathToImage = getImage(project.posterImage);
        let projectName = project.inSiteLink;
        if (projectName.includes("-"))
          projectName = projectName.replace("-", "");
        let className = styles[`${projectName}`];
        if (className === "undefined") className = "";

        return (
          <div
            className={`${className} ${styles.cardContainer}`}
            key={project.id}
          >
            <GatsbyImage image={pathToImage} alt="someImage" />
            <div className={styles.contentContainer}>
              <div className={styles.textContainer}>
                <h2 className={styles.siteTitle}>{project.title}</h2>
                <p className={styles.siteDescription}>
                  {project.smallDescription.smallDescription}
                </p>
                <Link to={`/projects/${project.inSiteLink}`}>
                  <button className={styles.btn}>View more</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsListings;
