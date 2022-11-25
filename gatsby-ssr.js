const React = require("react");

const { FormToggleProvider } = require("./src/context/toggleFormContext.js");

const Layout = require("./src/components/Layout/Layout").default;

exports.wrapRootElement = ({ element }) => {
  return <FormToggleProvider>{element}</FormToggleProvider>;
};

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};