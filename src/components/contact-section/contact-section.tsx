import React, { memo } from 'react';
import styles from './contact-section.module.scss';
import Helmet from 'react-helmet';

const ContactSection = memo(() => {
  return (
    <div className={styles.container}>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
              integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
              crossOrigin="anonymous"/>
      </Helmet>
      <div className={styles.content}>
        <div className={styles.title}>
          많은 사람들과의 소통, <br/>
          함께 아이디어를 재시 및 논의하여 <br/>
          목표를 향해 달려가는 협업을 기대합니다.
        </div>
        <div className={styles.subTitle}>
          김.덕.구. deok9 - frontend develop engineer
        </div>
        <a className={styles.email} href="mailto: kkddgg1001@gmail.com">kkddgg1001@gmail.com</a>
        <div className={styles.links}>
          {/* eslint-disable-next-line */}
          <a className={`${styles.icon} fab fa-github`} rel="noreferrer" target="_blank" href="https://github.com/deokgoo"/>
          {/* eslint-disable-next-line */}
          <a className={`${styles.icon} fab fa-linkedin`} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kim-deokgoo-51b583155/"/>
        </div>
        <span className={styles.resumeDescription}>
          이력서는 이런 흐름으로 만들었습니다.!
          <br/><br/>👇👇👇👇<br/><br/>
        </span>
        <a className={styles.aboutResume} rel="noreferrer" target="_blank" href="https://github.com/deokgoo/react-resume/wiki/Production-process">
          resume created process
        </a>
        <div className={styles.reserved}>2021 deokgoo - All rights reserved</div>
      </div>
    </div>
  )
});

export default ContactSection;
