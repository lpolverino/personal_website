import React from 'react'
import styles from "./navigation-link.module.css"


const NavigationLInk = ({to, onFocus, isFocused}) => {

  let link_Style = styles.link

  if (isFocused === ""){
     link_Style = styles.link
  }else{
     link_Style = isFocused === to ? styles.link : styles.light_link
  }

  let text = ''
  if(to === "Home") text = "top"
  else text = to
  return (
    <a href={"#"+ text} className={link_Style} onMouseEnter={() => onFocus(to)} onMouseLeave={()=>onFocus("")}>// {to}</a>
  )
}

export default NavigationLInk