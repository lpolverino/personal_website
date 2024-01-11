import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import style from "./main.module.css"


const Main = () => {
  return (
    <div className={style.main}>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Main