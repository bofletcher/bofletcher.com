import React from "react";
import styles from './Menu.module.css';
import { Link } from "react-router-dom";
import moment from 'moment'
import windowsStartIcon from "./windows-start-btn-icon.png";
import windowsSoundIcon from "./windows-sound-icon.png";
import windowsProjectsIcon from "./windows-projects-icon.png";
import windowsMenuArrow from "./windows-menu-arrow.png"
import windowsFileIcon from "./windows-file-icon.png"
import windowsResumeIcon from "./windows-resume-icon.png"
import windowsAboutIcon from "./windows-about-icon.png"
import windowsPhoneIcon from "./windows-phone-icon.png"
import windowsCDIcon from "./windows-95-cd-icon.png"
import windowsShutdownIcon from "./windows-shutdown-icon.png"
 
const Menu = (props) => {
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

  let attachedStyles = [styles.startMenu, styles.Close];
  if (props.open) {
    attachedStyles = [styles.startMenu, styles.Open]
  }



  // let updateTime = function() {
  //   document.querySelector('clock').innerHTML =
  //   <h1>{moment().format("h:mm")}</h1>
  // }


  let curTime = moment().format("h:mm");;

  // function displayTime() {
  //   curTime = moment().format("h:mm");
  //   setTimeout(curTime, 1000);
  //   return curTime;
  // }



  return(

 <div>
   <div className={attachedStyles.join(' ')}>
    <div className={styles.startMenuWrapper}>
      <div className={styles.startMenuSideTextWRow}>
        <div className={styles.startMenuSideTextWRowCol}>
          <div className={styles.startMenuSideTextWrapper}>
            <div className={styles.win95Txt}>Windows</div>
            <div className={styles.win95Txt95}><strong className={styles.win95}>95</strong></div>

          </div>

        </div>
        <div className={styles.startMenuOptionsColumn}>
        <Link to="/projects">
          <div onClick={()=> props.openWindow('PROJECTS')} className={styles.startMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsProjectsIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}><span className={styles.underline}>P</span>rojects</div>
              <img className={styles.menuArrow} src={windowsMenuArrow} alt="windows-menu-arrow"/>
          </div>
          </Link>
          <Link to="/resume">
          <div onClick={()=> props.openWindow('RESUME')} className={styles.startMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsResumeIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}><span className={styles.underline}>R</span>esume</div>
              
          </div>
          </Link>
          <Link to="/about">
          <div onClick={()=> props.openWindow('ABOUT')} className={styles.startMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsAboutIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}><span className={styles.underline}>A</span>bout</div>
              
          </div>
          </Link>
          <Link onClick={()=> props.openWindow('CONTACT')} to="/contact">
          <div className={styles.startMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsPhoneIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}><span className={styles.underline}>C</span>ontact</div>
              
          </div>
          </Link>
          <Link to="//github.com/bofletcher" target="_blank">
          <div className={styles.startMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsFileIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}><span className={styles.underline}>G</span>ithub</div>
              
          </div>
          </Link>
          <Link to="/">
          <div onClick={props.openWindow} className={styles.startMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsCDIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}><span className={styles.underline}>H</span>ome</div>
              
          </div>
          </Link>
          <div className={styles.shutdownMenuOption}>
              <img className={styles.windowsProjectIcon} src={windowsShutdownIcon} alt="windows-projects-icon"/>
              <div className={styles.startMenuOptionText}>Shutdown...</div>
              
          </div>
        </div>
      </div>
    </div>
   </div>

  <div className={styles.startBar}>
    <div className={styles.startBtn} onClick={props.click}>
      <img className={styles.startBtnImg} src={windowsStartIcon} alt="start-btn-img"/>
      <div className={styles.startBtnText}>Start</div>
    </div>
    <div className={styles.clock}>
      <div className={styles.clockWrapper}>
        <img className={styles.clockIcon} src={windowsSoundIcon} alt=""/>
        <div className={styles.clockText} id="clock">
            {curTime}
        </div>
        </div>

      </div>
  </div>
  </div>
  )

  }

export default Menu;