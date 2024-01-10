import React, { useState } from 'react'
import NavigationLInk from '../NavigationLink/NavigationLInk'
import styles from "./navigation.module.css"

const Navigation = () => {
  const [focused, setFocused] = useState("")

  const handleFocus = (elementName) =>{
    setFocused(elementName)
  }
  return (
    <nav className={styles.nav}>
      <NavigationLInk to="Home" onFocus={ handleFocus} isFocused = {focused}></NavigationLInk>
      <NavigationLInk to="About" onFocus={handleFocus} isFocused = {focused}></NavigationLInk>
      <NavigationLInk to="Projects" onFocus={handleFocus} isFocused = {focused}></NavigationLInk>
      <NavigationLInk to="Contact" onFocus={handleFocus} isFocused = {focused}></NavigationLInk>
    </nav>
  )
}

export default Navigation