import React, { memo } from 'react';
import styles from './landing.module.scss';
import Navigation from '../navigation';

const Landing = memo(({refs}: {refs: any}) => {
  const avatarUrl = 'https://avatars3.githubusercontent.com/u/20182365?s=400&u=b42f8d09da0bbba0a1aa030e2f2a184ecad8510f&v=4';
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          Front Developer
        </div>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <img className={styles.avatar} src={avatarUrl} alt="it's deok9"/>
          <div className={styles.description}>
            안녕하세요! 김덕구입니다. <br/>
            <span className={styles.underline}>탐구형</span> 프론트엔드 개발자 입니다.
          </div>
        </div>
      </div>
      <div className={styles.naviContainer}>
        <Navigation refs={refs}/>
      </div>
    </div>
  )
});

export default Landing;
