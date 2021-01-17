import React, { memo } from 'react';
import styles from './skill-section.module.scss';
import useSkillSection from './hooks/use-skill-section';

const SkillSection = memo(() => {
  const { skillContent } = useSkillSection();

  const renderSkills = () => (
    skillContent?.map(skill => (
      <div key={skill.title}>
        <div className={styles.title}>{skill.title}</div>
        <div className={styles.descriptions}>
          {renderSkillDescription(skill.contents)}
        </div>
        <hr className={styles.underline}/>
      </div>
    ))
  )

  const renderSkillDescription = (contents: string[]) => (
    contents.map(item => (
      <div key={item}>
        <div className={styles.item}>
          <div className={styles.content}>
            {item}
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className={styles.container}>
      {renderSkills()}
    </div>
  );
});

export default SkillSection;
