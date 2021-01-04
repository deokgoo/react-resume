import WorkExperienceSection from './work-experience-section';
import { cardType } from '../layout/type';
import styles from './work-experience-section.module.scss';

const workExperienceStyle: cardType = {
  title: 'WorkExperience',
  cardStyle: {
    background: styles.card__background,
    titleColor: styles.card__title,
    naviColor: styles.card__navi,
  }
}

const containerWorkExpeirence = {
  card: workExperienceStyle,
  content: WorkExperienceSection,
}

export default containerWorkExpeirence;
