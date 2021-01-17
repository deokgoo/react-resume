import React, { memo } from 'react';
import styles from './landing.module.scss';
import Navigation from '../navigation';
import useLanding from './hooks/use-landing';

const Landing = memo(({refs}: {refs: any}) => {
  const { landingContent, historyPush } = useLanding();
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
          <div className={`${styles.description} ${landingContent?'':styles.wave}`}>
            {landingContent?.title} <br/>
            {landingContent?.subTitle}
          </div>
          <div className={styles.lang}>
            <div className={styles.lang__title}>
              Language
            </div>
            <div className={styles.others}>
              <span className={styles.clickable} onClick={() => historyPush('en')}>English</span>
              <span className={styles.distinguish}> · </span>
              <span className={styles.clickable} onClick={() => historyPush('ko')}>Korea</span>
              <span className={styles.distinguish}> · </span>
              <span className={styles.clickable} onClick={() => historyPush('jp')}>Japan</span>
            </div>
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
