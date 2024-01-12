import React from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Skills from '../Skills/Skills'
import styles from "./about.module.css"


const About = () => {
  return (
    <section id="About">
        <div className={styles.about}>
          <h2 className={styles.title}>About</h2>
          <div className={styles.info}>
            <PersonalInfo></PersonalInfo>
            <Skills></Skills>
          </div>
        </div>
    </section>
  )
}

export default About