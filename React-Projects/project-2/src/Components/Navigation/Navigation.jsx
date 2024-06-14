import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container `}>
    <div clasName = "logo">
        <img src ="/Images/logo.png" alt = "logo"
/>
    </div>
    <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
    </nav>
  )
}

export default Navigation