import React from 'react'
import skillData from './skills-data'
import SkillSection from '../SkillSection/SkillSection'
import styles from "./skills.module.css"

const Skills = () => {
  return (
    <div className={styles.skills}>
      {skillData.map((skill =>  <SkillSection skill = {skill} key={skill.id}></SkillSection>))}
    </div>
  )
}

export default Skills