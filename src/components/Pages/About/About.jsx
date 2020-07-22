import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutPage}>
        <div className={styles.aboutMeTextContainer}>
            Hello, 
            <br></br>
              My Name is Bo Fletcher. 
              I am a Software Developer. 
              I have a passion for making amazing software that people love to use. 
        </div>
    </div>
  )
}

export default About;