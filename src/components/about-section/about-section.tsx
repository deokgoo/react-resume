import React, { memo } from 'react';
import styles from './about-section.module.scss';
import useAboutSection from './hooks/use-about-section';

const AboutSection = memo(() => {
  const { aboutContent } = useAboutSection();

  const renderAbout = () => {
    return aboutContent?.map(x => (
      <div key={x.title}>
        <div className={styles.title}>{x.title}</div>
        {
          x.descriptions.map(description => (
            <div className={styles.description} key={description}>
              <div className={styles.item}>
                <div className={styles.content}>
                  {description}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    ))
  };

  return (
    <div className={styles.container}>
      {renderAbout()}
    </div>
  );
});

export default AboutSection;
