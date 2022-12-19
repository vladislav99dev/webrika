import React, { useReducer } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./Slider.module.css";
import { GatsbyImage, getImage, Placeholder } from "gatsby-plugin-image";

import {
  FacebookSliderLogo,
  InstagramSliderLogo,
} from "../../assets/images/logos/logos";

const initialReducerState = {
  leftImage: false,
  centerImage: 0,
  rightImage: 1,
};

const reducerSlider = (state, { type, slidesCount }) => {
  switch (type) {
    case "rightArrow":
      if (state.leftImage === false) {
        return {
          leftImage: 0,
          centerImage: 1,
          rightImage: 2,
        };
      }
      if (state.leftImage !== false) {
        if (state.centerImage === slidesCount) return state;

        if (state.rightImage === slidesCount)
          return {
            leftImage: state.leftImage + 1,
            centerImage: state.centerImage + 1,
            rightImage: false,
          };

        return {
          leftImage: state.leftImage + 1,
          centerImage: state.centerImage + 1,
          rightImage: state.rightImage + 1,
        };
      }
      break;
    case "leftArrow":
      if (state.leftImage === false) {
        return state;
      }
      if (state.leftImage === 0) {
        console.log(state);
        return {
          leftImage: false,
          centerImage: 0,
          rightImage: 1,
        };
      }
      if (state.leftImage !== false) {
        if (state.centerImage === slidesCount) {
          return {
            leftImage: state.leftImage - 1,
            centerImage: state.centerImage - 1,
            rightImage: slidesCount,
          };
        }
        return {
          leftImage: state.leftImage - 1,
          centerImage: state.centerImage - 1,
          rightImage: state.rightImage - 1,
        };
      }
      break;
    default:
      break;
  }
};

const Slider = () => {
  const {
    allContentfulWebrikaSlider: { nodes: slidersData },
  } = useStaticQuery(graphql`
    query {
      allContentfulWebrikaSlider(sort: { poster: { filename: ASC } }) {
        nodes {
          clientName
          poster {
            gatsbyImageData(placeholder: BLURRED)
          }
          targetSocialMedia {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const [state, dispatch] = useReducer(reducerSlider, initialReducerState);

  return (
    <section className={styles.sliderContainer}>
      <div
        onTouchStart={(e) => console.log(e.touches)}
        className={styles.slider}
      >
        {state.leftImage !== false ? (
          <div className={styles.leftImage}>
            <GatsbyImage
              image={getImage(slidersData[state.leftImage].poster)}
              alt="some image"
            />
          </div>
        ) : (
          <Placeholder />
        )}
        <div className={styles.centerImage}>
          <GatsbyImage
            image={getImage(slidersData[state.centerImage].poster)}
            alt="some image"
          />
          <div className="text-[26px]">
            <div className="flex gap-x-2 ">
              <p>Client:</p>
              <p className="font-bold">
                {slidersData[state.centerImage].clientName}
              </p>
            </div>
            <div className="flex gap-x-4">
              <p>Target:</p>
              <div className="flex items-center gap-x-4">
                <FacebookSliderLogo />
                <InstagramSliderLogo />
              </div>
            </div>
          </div>
        </div>
        {state.rightImage !== false ? (
          <div className={styles.rightImage}>
            <GatsbyImage
              image={getImage(slidersData[state.rightImage].poster)}
              alt="some image"
            />
          </div>
        ) : (
          <Placeholder />
        )}
      </div>

      <div
        onClick={() =>
          dispatch({
            type: "rightArrow",
            slidesCount: slidersData.length - 1,
          })
        }
        className={styles.rightArrow}
      ></div>
      <div
        onClick={() =>
          dispatch({
            type: "leftArrow",
            slidesCount: slidersData.length - 1,
          })
        }
        className={styles.leftArrow}
      ></div>
    </section>
  );
};

export default Slider;
