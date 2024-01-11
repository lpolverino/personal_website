import React from 'react'
import styles from "./skill-section.module.css"
import { FaReact } from "react-icons/fa";

const SkillSection = ({skill}) => {
  return (
    <div className={styles.skill}>
        <h3 >{skill.title}</h3>
        <hr className={styles.bar} style={{borderColor:skill.colorTheme}}/>
    </div>
  )
}

export default SkillSection