import React, { useState } from 'react'
import styles from "./project-card.module.css"

const ProjectCard = ({project}) => {

  const [isFocused, setIsFocused] = useState(false)

  const togleClass = (isFocused) => {
    if(isFocused) return styles.link_apear
    else return styles.link
  }

  return (
    <div className={styles.card} onMouseEnter={() => setIsFocused(true)} onMouseLeave={()=>setIsFocused(false)}>
        <img src={project.img}></img>
        <p className={styles.title}>{project.name}</p>
        <p>{project.tags[0]}</p>
        <div className={togleClass(isFocused)}>  
          <a href={project.source}>See Code</a>
          <a href={project.url}>See Live</a>
        </div>
    </div>
  )
}

export default ProjectCard