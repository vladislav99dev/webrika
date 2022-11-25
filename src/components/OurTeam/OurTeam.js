import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./OurTeam.module.css";

const OurTeam = () => {
  const {
    allContentfulWebrikaTeam: { nodes: teamMembers },
  } = useStaticQuery(graphql`
  query {
    allContentfulWebrikaTeam(sort: {createdAt: DESC}) {
      nodes {
        description {
          description
        }
        id
        position
        name
        image {
          gatsbyImageData(
            quality: 100
            height: 250
            width: 250
            placeholder: BLURRED
            layout: FIXED
          )
        }
      }
    }
  }
`)

  return (
    <section className={styles.container}>
      {teamMembers.map((member) => {
        const pathToImage = getImage(member.image);
        return (
          <div key={member.id} className={styles.cardContainer}>
            <GatsbyImage image={pathToImage}  className={styles.image} alt="team member Image"/>
            <p className={styles.name}>{member.name}</p>
            <p className={styles.position}>{member.position}</p>
            <p className={styles.description}>{member.description.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default OurTeam;
