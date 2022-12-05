import React from "react";

import Footer from "../Footer/Footer";
import Form from "../Form/Form";

import { useFormToggleContext } from "../../context/toggleFormContext";

import Hero from "../Hero/Hero";

const Layout = (props) => {
  const { isFormOpen, toggleForm } = useFormToggleContext();

  return (
    <>
      <Form isFormOpen={isFormOpen} toggleForm={toggleForm} />
      <Hero path={props.path} toggleForm={toggleForm} />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
