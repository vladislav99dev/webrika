import React from 'react'
import { useStaticQuery,graphql,Link } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';

import * as styles from "./LandingsListing.module.css";



const LandingsListing = () => {

    const {allContentfulWebrikaLandingPages:{nodes:pages}} = useStaticQuery(graphql`
    query {
      allContentfulWebrikaLandingPages {
        nodes {
          id
          poster {
            gatsbyImageData(placeholder: BLURRED)
          }
          projectName
        }
      }
    }
  `)
  return (
   <section className={styles.container}>
    {pages.map((page) => {
        const imagePath = getImage(page.poster)
        return (
            <Link key={page.id} to={`/landing-pages/${page.projectName}`}>
            <div className={styles.imageContainer} >
                <GatsbyImage image={imagePath}/>
            </div>
            </Link>
        )
    })}

   </section>
  )
}

export default LandingsListing