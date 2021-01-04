import ContactSection from './contact-section';
import { cardType } from '../layout/type';
import styles from './contact-section.module.scss';

const contactStyle: cardType = {
  title: 'Contact',
  cardStyle: {
    background: styles.card__background,
    titleColor: styles.card__title,
    naviColor: styles.card__navi,
  }
}

const containerContact = {
  card: contactStyle,
  content: ContactSection,
}

export default containerContact;
