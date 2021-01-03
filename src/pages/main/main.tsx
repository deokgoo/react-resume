import React from 'react';
import Landing from '../../components/landing';
import AboutSection from '../../components/about-section';
import WorkExperienceSection from '../../components/work-experience-section';
import SkillSection from '../../components/skill-section';
import ContactSection from '../../components/contact-section';

import styles from './main.module.scss';
import Layout from '../../components/layout';

const Main = () => {
  return (
    <div className={styles.container}>
      <Landing/>
      {Layout(AboutSection)}
      {Layout(WorkExperienceSection)}
      {Layout(SkillSection)}
      {Layout(ContactSection)}
    </div>
  );
}

export default Main;
