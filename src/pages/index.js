import * as React from "react";

import { useFormToggleContext } from "../context/toggleFormContext";

import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import Video from "../components/Video/Video";
import ServicesNProducts from "../components/ServicesNProducts/ServicesNProducts";
import ContactUs from "../components/ContactUs/ContactUs";
import WeAreWebrikaVideo from "../assets/video/WeAreWebrika.mp4"
import "../styles/global.css";

const IndexPage = () => {
  const {toggleForm,isFormOpen} = useFormToggleContext();
  return (
    <>
    <Hero isFormOpen={isFormOpen} toggleForm={toggleForm}/>
      <HowWeWork toggleForm={toggleForm} />
      <Video video={WeAreWebrikaVideo} />
      <ServicesNProducts />
      <ContactUs toggleForm={toggleForm} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
