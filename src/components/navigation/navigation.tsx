import React from 'react';
import styles from './navigation.module.scss';

const Navigation = () => (
  <div className={styles.container}>
    <div className={styles.others}>
      ABOUT
      <span className={styles.distinguish}> / </span>
      WORK
      <span className={styles.distinguish}> / </span>
      SKILL
    </div>
    <div className={styles.contact}>
      CONTACT
    </div>
  </div>
);

export default Navigation;
