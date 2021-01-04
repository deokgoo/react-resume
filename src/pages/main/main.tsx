import React from 'react';
import Landing from '../../components/landing';
import AboutSection from '../../components/about-section';
import WorkExperienceSection from '../../components/work-experience-section';
import SkillSection from '../../components/skill-section';
import ContactSection from '../../components/contact-section';

import styles from './main.module.scss';
import Layout from '../../components/layout';
import useMain from './hooks/use-main';

const Main = () => {
  const { refs } = useMain();
  return (
    <div className={styles.container}>
      <Landing refs={refs}/>
      {Layout(AboutSection, refs, refs.aboutRef)}
      {Layout(WorkExperienceSection, refs, refs.workExperienceRef)}
      {Layout(SkillSection, refs, refs.skillRef)}
      {Layout(ContactSection, refs, refs.contactRef)}
    </div>
  );
}

export default Main;
