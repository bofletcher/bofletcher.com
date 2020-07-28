import React from "react";
import styles from "./Projects.module.css"


import joystickIcon from "./windows-joystick.png"
import globeIcon from "./windows-globe-icon.png"


function Projects() {
  return (
    <div className={styles.projectPage}>
      <div className={styles.projectPageBody}>
        <div className={styles.projectContainer}>
          <a href="//hexproof.club" target="_blank" rel="noopener noreferrer" >
          <img className={styles.projectIconImage} src={globeIcon} alt="windows-globe-icon"/>
           <div> HEXPROOF.CLUB </div>
           </a>
          {/* Project Description: */}
          {/* <p>A React App for a fictional band called hexproof. The app uses a custom audio player and a custom image carousel!</p> */}
        </div>

        <div className={styles.projectContainer}>
          <a href="//shredder-29fbd.firebaseapp.com" target="_blank" rel="noopener noreferrer" >
          <img className={styles.projectIconImage} src={joystickIcon} alt="windows-globe-icon"/>
            SHREDDER</a>
          {/* Project Description: 
          <p>A React app for Tracking your weight training using Firebase as a backend. Work in Progress</p> */}
        </div>
      </div>
    </div>
  )
}

export default Projects;