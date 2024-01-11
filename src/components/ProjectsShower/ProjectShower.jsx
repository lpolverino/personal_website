import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from "./project-shower.module.css"


const ProjectShower = ({projects}) => {
  return (
    <div className={styles.displayer}>
        {projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)}
    </div>
  )
}

export default ProjectShower