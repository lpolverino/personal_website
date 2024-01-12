import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
import styles from "./home.module.css"

import { Fade } from "react-awesome-reveal";


const Home = () => {
  return (
    <Fade direction='up' triggerOnce={true}>
      <div className={styles.home} >
        <HomeInfo></HomeInfo>
        <svg height="200" width="400" className={styles.mouse}>
          <ellipse cx="200" cy="80" rx="50" ry="80" style={{fill:"white"}} />
          <ellipse cx="200" cy="80" rx="45" ry="75" style={{fill:"#2C0735", opacity:1}} />
          <rect x="195" y="100" width="10" height="40" style={{fill:"white"}} className={styles.rect}></rect>
        </svg>
      </div>
    </Fade>
  )
}

export default Home