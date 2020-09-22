import React from "react";
import styles from "./Resume.module.css";
import BosResume from "../Resume/BoFletcher_Resume.pdf"
import ResumePic from "../Resume/Resume Pic.png"


function Resume() {
  return (
    <div className={styles.resumePage}>
        <img  className={styles.resumeImg} src={ResumePic} alt="resume-pic"/>
        <div className={styles.downloadLinkDiv}>
        <a className={styles.downloadLink} href={BosResume} download> Download My Resume </a>
        </div>
    </div>
  )
}

export default Resume;