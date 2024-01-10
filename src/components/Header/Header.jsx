import React from 'react'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

import styles from "./header.module.css"
import Hamburger from '../Hamburger/Hamburger'

const Header = () => {
  return (
    <div className={styles.header}>
        <Logo></Logo>
        <Navigation></Navigation>
        <Hamburger></Hamburger>
    </div>
  )
}

export default Header