import SkillSection from './skill-section';
import { cardType } from '../layout/type';
import styles from './skill-section.module.scss';

const skillStyle: cardType = {
  title: 'Skill',
  cardStyle: {
    background: styles.card__background,
    titleColor: styles.card__title,
    naviColor: styles.card__navi,
  }
}

const containerSkill = {
  card: skillStyle,
  content: SkillSection,
}

export default containerSkill;
