import React, { useState, useEffect } from 'react'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

import styles from "./header.module.css"
import Hamburger from '../Hamburger/Hamburger'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () =>{
    if(window.scrollY > 300){
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

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled :""}`}>
        <Logo></Logo>
        <Navigation isScrolled={isScrolled}></Navigation>
        <Hamburger></Hamburger>
    </div>
  )
}

export default Header