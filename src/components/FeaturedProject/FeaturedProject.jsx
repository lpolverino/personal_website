import React from 'react'
import styles from "./featured-project.module.css"

const FeaturedProject = ({project}) => {
  return (
    <div className={styles.project}>
        <div className={styles.info}>
            <h3>{project.name}</h3>
            <ul>
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <p>{project.description}</p>
            <div className={styles.link}>    
                <a href={project.source} className={styles.code}>Show Code</a>
                <a href={project.url} className={styles.url}>Visit Site</a>
            </div>
        </div>
        <div className={styles.project_img}>
          <a href={project.url}>
            <img src={project.img} alt={project.alt} />
          </a>
        </div>
    </div>
  )
}

export default FeaturedProject