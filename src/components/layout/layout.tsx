import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import styles from './layout.module.scss';
import { cardType } from './type';
import Navigation from '../navigation';
import scrollSupport from './scrollSupport';

const Layout = ({card, content: Content}: {card: cardType, content: any}, refs: any, ref: MutableRefObject<any>) => {
  const {title, cardStyle} = card;
  const [scrollState, updateScrollState] = useState<{custom: boolean, posAbs: boolean, posFix: boolean}>({custom: false, posAbs: false, posFix: false});
  const customLeft = useRef(null);
  const customRight = useRef(null);
  useEffect(() => {
    if(!customLeft) return;
    if(!customRight) return;
    window.addEventListener('scroll', () => {
      const newState = scrollSupport(ref.current, customLeft.current, customRight.current);
      // @ts-ignore
      updateScrollState(newState);
    });
    window.addEventListener('resize', () => {
      const newState = scrollSupport(ref.current, customLeft.current, customRight.current);
      // @ts-ignore
      updateScrollState(newState);
    });
  }, [ref, Content])
  const renderContent = () => {
    return (
      <div className={styles.container} ref={ref}>
        <section className={styles.section}>
          <div className={`
          ${styles.left} 
          ${cardStyle.background} 
          ${scrollState?.posAbs?styles.posAbs:''}
          ${scrollState?.posFix?styles.posFix:''}`} ref={customLeft}>
            <div className={`${styles.title} ${cardStyle.titleColor}`}>
              <span>{title}</span>
            </div>
            <div className={`${styles.navi} ${cardStyle.naviColor}`}>
              <Navigation refs={refs}></Navigation>
            </div>
          </div>
          <div className={styles.right} ref={customRight}>
            <Content/>
          </div>
        </section>
      </div>
    );
  }
  return renderContent();
};

export default Layout;
