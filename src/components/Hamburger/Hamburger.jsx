import React, { useEffect, useState } from 'react'
import styles from "./hamburger.module.css"
import NavigationLInk from '../NavigationLink/NavigationLInk'

const Hamburger = () => {
  
  const [burgerClass, setBurgerClass] = useState("uncliked")
  const [menuClass, setMenuClass] = useState("hidden")
  const [isMenuClicked, setIsMenuCliked] = useState(false)

  const updateMenu = () => {
    console.log("cliked hamburger");
    if(!isMenuClicked) {
      setBurgerClass("clicked")
      setMenuClass("visible")
    }else{
      setBurgerClass("unclicked")
      setMenuClass("hidden")
    }

    setIsMenuCliked(!isMenuClicked)
  }

  return (
    <div className={styles.hamburger}>
      <nav className={styles.nav}>
        <div className={styles.burgerMenu} onClick={updateMenu}>
          <div className={`${styles.burgerBar} ${styles[burgerClass]}`}></div>
          <div className={`${styles.burgerBar} ${styles[burgerClass]}`}></div>
          <div className={`${styles.burgerBar} ${styles[burgerClass]}`}></div>
        </div>
      </nav>
      <div className={`${styles.menu} ${styles[menuClass]}`}>
          <div onClick={updateMenu}>
            <NavigationLInk to={"Home"}></NavigationLInk>
          </div>
          <div onClick={updateMenu}>
            <NavigationLInk to={"About"}></NavigationLInk>
          </div>
          <div onClick={updateMenu}>
            <NavigationLInk to={"Projects"}></NavigationLInk>
          </div>
          <div onClick={updateMenu}>
            <NavigationLInk to={"Contact"}></NavigationLInk>
          </div>
      </div>
    </div>
  )
}

export default Hamburger