import * as React from "react";

const FormToggleContext = React.createContext();

const initialState = false;

export const FormToggleProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = React.useState(initialState);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <FormToggleContext.Provider value={{ isFormOpen, toggleForm }}>
      {children}
    </FormToggleContext.Provider>
  );
};

export const useFormToggleContext  = () => {
    const formState = React.useContext(FormToggleContext)
    return formState;
}
