import React, { useEffect, useState } from 'react'
import styles from "./home-info.module.css"

const HomeInfo = () => {
    const [index, setIndex] = useState(0)
    const names = [
        'CS Student', 'Full-Stack Developer', 'Software Developer'
    ]

    useEffect(() => {
        const key = setInterval(() => {
            setIndex(index => (index + 1) %3)
        }, 3000);
    
        return () => {
          clearInterval(key);
        };
      }, [])

  return (
    <div className={styles.info}>
        <h1>Lorenzo Polverino</h1>
        <h2>I'm <span className={styles.presentation}>{names[index]}</span></h2>
    </div>
  )
}

export default HomeInfo