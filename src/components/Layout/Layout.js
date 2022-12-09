import React from "react";

import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";

import { useFormToggleContext } from "../../context/toggleFormContext";

import Hero from "../Hero/Hero";

const Layout = (props) => {
  const { isFormOpen, toggleForm } = useFormToggleContext();
  const path = props.path.replaceAll("/", "");
  const displayHero =
    path.includes("landing-pages") || props.path.includes("projects")
      ? false
      : true;
  return (
    <>
      <Form isFormOpen={isFormOpen} toggleForm={toggleForm} />
      {displayHero ? <Hero path={props.path} toggleForm={toggleForm} /> : null}
      {React.cloneElement(props.children, { path })}
      <Footer />
    </>
  );
};

export default Layout;
