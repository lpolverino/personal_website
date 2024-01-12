import React from 'react'
import styles from "./contact.module.css"
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { Fade } from "react-awesome-reveal";


const Contact = () => {
  const methods = []
  return (
    <Fade direction='up' triggerOnce={true}>
    <section id="Contact">
        <div>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.conteiner}>
            <div className={styles.contact}>
              <h3>I'm Available for work!</h3>
              <p>If you liked what you saw you can reach me by the following methods:</p>
              <div className={styles.links}>
              <div className={styles.camp}>
                  <SiGmail></SiGmail>
                  <p className={styles.email}> lorenz.polverino@gmail.com</p>
                </div>
                <div className={styles.camp}>
                  <FaLinkedin></FaLinkedin>
                  <p> <a href="https://www.linkedin.com/in/lorenzo-polverino-845609219/">LinkedIn</a></p>
                </div>
                <div className={styles.camp}>
                  <FaGithub></FaGithub>
                  <p><a href="https://github.com/lpolverino">Github</a> </p>
                </div>
              </div>
            </div>
            <div className={styles.cv}>
              <h3> Or you can download my CV(spanish)</h3>
              <div className={styles.progress_bar}>
                <div className={`${styles.circle} ${styles.border}`}>
                </div>
                <div className={styles.cv_button}><a href="" download="newname">CV</a></div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </Fade>
  )
}

export default Contact