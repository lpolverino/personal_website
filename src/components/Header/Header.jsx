import React, { useState, useEffect } from 'react'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

import styles from "./header.module.css"
import Hamburger from '../Hamburger/Hamburger'

const HAMBURGER_OFFSET = 480

const getWindowWidth = () =>{
  const {innerWidth} = window
  return {innerWidth}
}

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  const handleScroll = () =>{
    if(window.scrollY > 30){
      setIsScrolled(true);
    } else{
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect( () => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowWidth())
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  },[])

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled :""}`}>
        <Logo></Logo>
        {windowWidth.innerWidth > HAMBURGER_OFFSET
          ?<Navigation isScrolled={isScrolled}></Navigation>
          :<Hamburger isScrolled={isScrolled}></Hamburger>
        }
    </div>
  )
}

export default Header