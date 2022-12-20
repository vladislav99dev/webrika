import React, { useReducer, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./Slider.module.css";
import { GatsbyImage, getImage, Placeholder } from "gatsby-plugin-image";

import {
  FacebookSliderLogo,
  InstagramSliderLogo,
} from "../../assets/images/logos/logos";

const initialSliderState = {
  leftImage: false,
  centerImage: 0,
  rightImage: 1,
};

const initialTouchState = {
  touchStart: 0,
  touchEnd: 0,
};

const reducerTouchState = (state, { type, payload }) => {
  switch (type) {
    case "touchStart":
      return {
        touchStart: payload,
        touchEnd: state.touchEnd,
      };
    case "touchEnd":
      return {
        touchStart: state.touchStart,
        touchEnd: payload,
      };
  }
};

const reducerSlider = (state, { type, slidesCount, dotClicked }) => {
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

    case "dotClicked":
      if (dotClicked === 0) return initialSliderState;
      if (dotClicked === slidesCount)
        return {
          leftImage: slidesCount - 1,
          centerImage: slidesCount,
          rightImage: false,
        };
      return {
        leftImage: dotClicked -1,
        centerImage: dotClicked,
        rightImage: dotClicked + 1
      }
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

  const [sliderState, sliderDispatch] = useReducer(
    reducerSlider,
    initialSliderState
  );
  const [touchState, touchDispatch] = useReducer(
    reducerTouchState,
    initialTouchState
  );

  useEffect(() => {
    if (touchState.touchStart < touchState.touchEnd)
      sliderDispatch({
        type: "leftArrow",
        slidesCount: slidersData.length - 1,
      });
    if (touchState.touchStart > touchState.touchEnd)
      sliderDispatch({
        type: "rightArrow",
        slidesCount: slidersData.length - 1,
      });
  }, [touchState.touchEnd]);

  const touchHandlerStart = (e) => {
    touchDispatch({ type: "touchStart", payload: e.touches[0].clientX });
  };

  const touchHandlerMove = (e) => {
    touchDispatch({ type: "touchEnd", payload: e.changedTouches[0].clientX });
  };

  return (
    <section className={styles.sliderContainer}>
      <div
        onTouchStart={touchHandlerStart}
        onTouchEnd={touchHandlerMove}
        className={styles.slider}
      >
        <div className="hidden xl:block">
          {sliderState.leftImage !== false && (
            <div className={styles.leftImage}>
              <GatsbyImage
                image={getImage(slidersData[sliderState.leftImage].poster)}
                alt="some image"
              />
            </div>
          )}
        </div>
        <div className={styles.centerImage}>
          <GatsbyImage
            image={getImage(slidersData[sliderState.centerImage].poster)}
            alt="some image"
          />
          <div className="text-[26px] mt-6">
            <div className="flex gap-x-2 ">
              <p>Client:</p>
              <p className="font-bold">
                {slidersData[sliderState.centerImage].clientName}
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
        <div className="hidden xl:block">
          {sliderState.rightImage !== false && (
            <div className={styles.rightImage}>
              <GatsbyImage
                image={getImage(slidersData[sliderState.rightImage].poster)}
                alt="some image"
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {slidersData.map((el, i) => (
          <div
            onClick={() =>
              sliderDispatch({
                type: "dotClicked",
                slidesCount: slidersData.length - 1,
                dotClicked: i,
              })
            }
            className={sliderState.centerImage === i ? `${styles.dot} ${styles.activeDot}` : styles.dot}
          ></div>
        ))}
      </div>

      <div
        onClick={() =>
          sliderDispatch({
            type: "rightArrow",
            slidesCount: slidersData.length - 1,
          })
        }
        className={styles.rightArrow}
      ></div>
      <div
        onClick={() =>
          sliderDispatch({
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
