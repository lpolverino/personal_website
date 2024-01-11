import React, {useState} from 'react'
import ProjectShower from '../ProjectsShower/ProjectShower'
import styles from "./project-slider.module.css"

const ProjectSlider = ({projects}) => {

  const [filter, setFilter] = useState(0)
  const [filters, setFIlters] = useState([
    "All",
    "FullStack",
    "Frontend",
    "Backend",
    "Others"
  ])

  const changeFilter = (event, category) =>{
    event.preventDefault();
    const index = filters.findIndex((element) => element === category)
    if (index !== -1) setFilter(index)
  }

  const filterProjects = (filter) =>{
    return filter !== "All"? projects.filter(project => project.tags.includes(filter)) : projects
  }

  const isSelected = (category) =>{
    if(filters[filter] === category) return styles.selected
    return styles.link
  }

  return (
    <div className={styles.slider}> Filter By:
      <ul className={styles.filters}>
        {filters.map(category => <li key={category}><a onClick={(event)=>changeFilter(event, category)} className={isSelected(category)}>{category}º</a></li>)}
      </ul>
        <ProjectShower projects={filterProjects(filters[filter])}></ProjectShower>
    </div>
  )
}

export default ProjectSlider