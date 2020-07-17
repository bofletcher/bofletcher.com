import React from "react";
import styles from './Menu.module.css'
import { Link } from "react-router-dom"
import windowsStartIcon from "./windows-start-btn-icon.png"
import windowsSoundIcon from "./windows-sound-icon.png"
 
const Menu = () => (
  /*
  <header className={styles.startMenu}>
    <div className={styles.windowsTopbar}>
    Welcome to BOFLETCHER.COM
    </div>
    <ul>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/resume">RESUME</Link>
      <Link to="/contact">CONTACT</Link>
    </ul>
  </header>
  */

  <div className={styles.startBar}>
    <div className={styles.startBtn}>
      <img className={styles.startBtnImg} src={windowsStartIcon} alt="start-btn-img"/>
      <div className={styles.startBtnText}>Start</div>
    </div>
    <div className={styles.clock}>
      <div className={styles.clockWrapper}>
        <img className={styles.clockIcon} src={windowsSoundIcon} alt=""/>
        </div>
        <div className={styles.clockText}>
            3:33
        </div>
      </div>
  </div>

)

export default Menu;