import React, { useEffect, useState } from 'react'
import styles from './back-to-top.module.css'
import {HiArrowNarrowUp} from 'react-icons/hi'

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () =>{
    if(window.scrollY > 500){
      setShowButton(true);
    } else{
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    })
  }

  return (
    <button className={`${styles.button} ${showButton ? styles.show : ""}`}
    onClick={scrollToTop}>
        <HiArrowNarrowUp size={24} className={styles.icon}></HiArrowNarrowUp>
    </button>
  )
}

export default BackToTop