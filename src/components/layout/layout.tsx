import React  from 'react';
import styles from './layout.module.scss';
import { cardType } from './type';

const Layout = (card: cardType, RightContent: any) => {
  const {title, cardStyle} = card;
  const renderContent = () => {
    return (
      <div className={styles.container}>
        <div className={styles.left} style={{backgroundColor: cardStyle.background}}>
          <div className={styles.title}>
            {title}
          </div>
        </div>
        <div className={styles.right}>
          <RightContent></RightContent>
        </div>
      </div>
    );
  }
  return renderContent();
};

export default Layout;
