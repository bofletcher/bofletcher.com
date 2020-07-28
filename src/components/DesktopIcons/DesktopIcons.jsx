import React from "react";
import styles from "./DesktopIcons.module.css";
import { Link } from "react-router-dom";

import windowsProjectsIcon from "../Menu/windows-projects-icon.png";
import windowsFileIcon from "../Menu/windows-file-icon.png"
import windowsResumeIcon from "../Menu/windows-resume-icon.png"
import windowsAboutIcon from "../Menu/windows-about-icon.png"
import windowsPhoneIcon from "../Menu/windows-phone-icon.png"



function DesktopIcons(props) {
  return (
    <div className={styles.desktopIconsColumn}>
        <Link to="/projects">
        <div onClick={()=> props.openWindow('PROJECTS')} className={styles.desktopIconWrapper}>
          <img className={styles.iconImage} src={windowsProjectsIcon} alt="windows-phone-icon"/>
          <div className={styles.desktopIconLabel}>
            Projects
          </div>
        </div>
        </Link>
        <Link to="/resume">
        <div  onClick={()=> props.openWindow('RESUME')} className={styles.desktopIconWrapper}>
          <img className={styles.iconImage} src={windowsResumeIcon} alt="windows-phone-icon"/>
          <div className={styles.desktopIconLabel}>
            Resume
          </div>
        </div>
        </Link>
        <Link to="/about">
        <div onClick={()=> props.openWindow('ABOUT')} className={styles.desktopIconWrapper}>
          <img className={styles.iconImage} src={windowsAboutIcon} alt="windows-phone-icon"/>
          <div className={styles.desktopIconLabel}>
            About
          </div>
        </div>
        </Link>
        <Link to="/contact">
        <div onClick={()=> props.openWindow('CONTACT')} className={styles.desktopIconWrapper}>
          <img className={styles.iconImage} src={windowsPhoneIcon} alt="windows-phone-icon"/>
          <div className={styles.desktopIconLabel}>
            Contact
          </div>
        </div> 
        </Link>
        <Link to="//github.com/bofletcher" target="_blank">
        <div className={styles.desktopIconWrapper}>
          <img className={styles.iconImage} src={windowsFileIcon} alt="windows-phone-icon"/>
          <div className={styles.desktopIconLabel}>
            Github
          </div>
        </div> 
        </Link>       
    </div>
  )
}

export default DesktopIcons;