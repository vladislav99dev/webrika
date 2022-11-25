import React from 'react'

import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'

import { useFormToggleContext } from '../../context/toggleFormContext'

const Layout = ({children}) => {

  const {isFormOpen,toggleForm} = useFormToggleContext();

  return (
    <>
    {/* {isFormOpen ? <Form/> :} */}
    <Form isFormOpen={isFormOpen} toggleForm={toggleForm}/>
    <Hero isFormOpen={isFormOpen} toggleForm={toggleForm}/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
