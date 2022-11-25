import React from 'react'
import * as styles from "./ContactUs.module.css"

import Button from "../Button/Button"

const ContactUs = ({toggleForm}) => {
  return (
    <section className={styles.section}>
        <h2 className={styles.heading}>Contact us</h2>
        <p className={styles.pInformation}>Contact information</p>
        <div className={styles.contactsContainer}>
            <div className={styles.labels}>
                <p>Contact person:</p>
                <p>Contact number:</p>
                <p>Contact email:</p>
            </div>
            <div className={styles.information}>
                <p>George Prusiyski</p>
                <p>+359 87 873 5795</p>
                <p>g.prusiyski@webrika.bg</p>
            </div>
        </div>
          <Button width={'44rem'} height={'5rem'} fontSize={'2.2rem'}  toggleForm={toggleForm}/>
    </section>
  )
}

export default ContactUs
