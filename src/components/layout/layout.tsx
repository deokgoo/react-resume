import React, { MutableRefObject, useEffect } from 'react';
import styles from './layout.module.scss';
import { cardType } from './type';
import Navigation from '../navigation';

const Layout = ({card, content: Content}: {card: cardType, content: any}, refs: any, ref: MutableRefObject<any>) => {
  const {title, cardStyle} = card;
  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry);
      });
    })
  }, [])
  const renderContent = () => {
    return (
      <div className={styles.container} ref={ref}>
        <div className={`${styles.left} ${cardStyle.background}`}>
          <div className={`${styles.title} ${cardStyle.titleColor}`}>
            <span>{title}</span>
          </div>
          <div className={`${styles.navi} ${cardStyle.naviColor}`}>
            <Navigation refs={refs}></Navigation>
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
