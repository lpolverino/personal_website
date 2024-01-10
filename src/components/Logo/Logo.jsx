import React from 'react'
import styles from "./logo.module.css"


const Logo = () => {
  return (
    <div className={styles.div}>
      <h1 className={styles.logo_title}>
         lpolverino<span className={styles.logo_span}>_</span>
      </h1>
    </div>
  )
}

export default Logo