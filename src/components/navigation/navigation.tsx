import React, { MutableRefObject } from 'react';
import styles from './navigation.module.scss';

const Navigation = ({refs}: any) => {
  const onClick = (ref: MutableRefObject<any>) => {
    ref.current.scrollIntoView({behavior:'smooth'});
  };
  return (
    <div className={styles.container}>
      <div className={styles.others}>
        <span onClick={() => onClick(refs.aboutRef)}>ABOUT</span>
        <span className={styles.distinguish}> / </span>
        <span onClick={() => onClick(refs.workExperienceRef)}>WORK</span>
        <span className={styles.distinguish}> / </span>
        <span onClick={() => onClick(refs.skillRef)}>SKILL</span>
      </div>
      <div className={styles.contact} onClick={()=> onClick(refs.contactRef)}>
        CONTACT
      </div>
    </div>
  );
}

export default Navigation;
