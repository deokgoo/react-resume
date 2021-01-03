import React from 'react';
import AboutSection from '../../components/about-section';
import ContactSection from '../../components/contact-section';
import Landing from '../../components/landing';
import SkillSection from '../../components/skill-section';
import WorkExperienceSection from '../../components/work-experience-section';
import styles from './main.module.scss';
import Layout from '../../components/layout';

const Main = () => {
  return (
    <div className={styles.container}>
      <Landing></Landing>
      {Layout({
        title: 'test',
        cardStyle: {
          background: 'red',
          naviColor: 'white',
          titleColor: 'black'
        }},
        AboutSection)}
      {Layout({
          title: 'test',
          cardStyle: {
            background: 'red',
            naviColor: 'white',
            titleColor: 'black'
          }},
        WorkExperienceSection)}
      {Layout({
          title: 'test',
          cardStyle: {
            background: 'red',
            naviColor: 'white',
            titleColor: 'black'
          }},
        SkillSection)}
      {Layout({
          title: 'test',
          cardStyle: {
            background: 'red',
            naviColor: 'white',
            titleColor: 'black'
          }},
        ContactSection)}
    </div>
  );
}

export default Main;
