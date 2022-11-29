import * as React from "react";

import { useFormToggleContext } from "../context/toggleFormContext";

import HowWeWork from "../components/HowWeWork/HowWeWork";
import Video from "../components/Video/Video";
import ServicesNProducts from "../components/ServicesNProducts/ServicesNProducts";
import ContactUs from "../components/ContactUs/ContactUs";
import WeAreWebrikaVideo from "../assets/video/WeAreWebrika.mp4"
import "../styles/global.css";

const IndexPage = () => {
  const {toggleForm} = useFormToggleContext();
  return (
    <>
      <HowWeWork toggleForm={toggleForm} />
      <Video video={WeAreWebrikaVideo} />
      <ServicesNProducts />
      <ContactUs toggleForm={toggleForm} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
