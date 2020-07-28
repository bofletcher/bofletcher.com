import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPageBody}>
        <div className={styles.contactLinkWrapper}>
          <a className={styles.contactLink} href="sms:+16787895957&body=Hi%2C%20I%20would%20like%20to%20speak%20with%20you%20about%20Web%20Development%2FSoftware%20Development%20opportunities.%20">Text: (678) 789-5957 (click me)</a>
        </div>
        <div className={styles.contactLinkWrapper}>
          <a className={styles.contactLink} href="mailto: hfletche.hf@gmail.com">Email: hfletche.hf@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;