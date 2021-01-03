import AboutSection from './about-section';
import { cardType } from '../layout/type';
import styles from './about-section.module.scss';

const aboutStyle: cardType = {
  title: 'About',
  cardStyle: {
    background: styles.card__background,
    titleColor: styles.card__title,
    naviColor: styles.card__navi,
  }
}

const containerAbout = {
  card: aboutStyle,
  content: AboutSection,
}

export default containerAbout;
