import React from "react";

import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";

import { useFormToggleContext } from "../../context/toggleFormContext";

import Hero from "../Hero/Hero";

const Layout = (props) => {
  const { isFormOpen, toggleForm } = useFormToggleContext();
  const path = props.path.replaceAll("/","");
  return (
    <>
      <Form isFormOpen={isFormOpen} toggleForm={toggleForm} />
      {props.path.includes("/landing-pages/") ? null : <Hero path={props.path} toggleForm={toggleForm} /> }
      {React.cloneElement(props.children, {path})}
      <Footer />
    </>
  );
};

export default Layout;
