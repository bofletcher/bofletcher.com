import React from "react";
import styles from "./Resume.module.css";
import BosResume from "../Resume/BoFletcher_Resume.docx"
import ResumePic from "../Resume/Resume Pic.png"


function Resume() {
  return (
    <div className={styles.resumePage}>
        <a href={BosResume} download> Download My Resume </a>
        <img  className={styles.resumeImg} src={ResumePic} alt="resume-pic"/>
    </div>
  )
}

export default Resume;