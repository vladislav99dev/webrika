import React from 'react'
import { Link } from 'gatsby'

import * as styles from "./Button.module.css"
import ArrowIcon from "../../assets/images/btnsIcons/arrowIcon.svg"

const Button = ({width,height,fontSize,toggleForm}) => {
  return (
    <button style={{width,height,fontSize}} className={`${styles.btn}`} onClick={toggleForm}>
        Work with us
        <ArrowIcon className={styles.icon}/>
    </button>
  )
}

export default Button