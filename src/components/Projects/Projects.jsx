import React from 'react'
import FeaturedProject from '../FeaturedProject/FeaturedProject'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import styles from "./projects.module.css"
import projectData from './projectsData'

const Projects = () => {
  return (
    <div className={styles.project}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.Projects}>
            <FeaturedProject project={projectData.featured}></FeaturedProject>
            <ProjectSlider projects = {projectData.projects}></ProjectSlider>
        </div>
    </div>
  )
}

export default Projects