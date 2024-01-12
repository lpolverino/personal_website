import React from 'react'
import FeaturedProject from '../FeaturedProject/FeaturedProject'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import styles from "./projects.module.css"
import projectData from './projectsData'

import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Fade direction='up' triggerOnce={true}>
    <section id='Projects'>
        <div className={styles.project}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.Projects}>
                <FeaturedProject project={projectData.featured}></FeaturedProject>
                <ProjectSlider projects = {projectData.projects}></ProjectSlider>
            </div>
        </div>
    </section>
    </Fade>
  )
}

export default Projects