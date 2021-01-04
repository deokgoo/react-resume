import React  from 'react';
import styles from './layout.module.scss';
import { cardType } from './type';
import Navigation from '../navigation';

const Layout = ({card, content: Content}: {card: cardType, content: any}) => {
  const {title, cardStyle} = card;
  const renderContent = () => {
    return (
      <div className={styles.container}>
        <div className={`${styles.left} ${cardStyle.background}`}>
          <div className={`${styles.title} ${cardStyle.titleColor}`}>
            <span>{title}</span>
          </div>
          <div className={`${styles.navi} ${cardStyle.naviColor}`}>
            <Navigation></Navigation>
          </div>
        </div>
        <div className={styles.right}>
          <Content/>
        </div>
      </div>
    );
  }
  return renderContent();
};

export default Layout;
