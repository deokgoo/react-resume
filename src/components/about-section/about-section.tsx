import React, { memo } from 'react';
import styles from './about-section.module.scss';

const AboutSection = memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        저는 풀스택을 지향합니다.
      </div>
      <div className={styles.description}>
        프론트 성향이 짙은 2년차 엔지니어이며, <br/>
        프로덕터의 도메인이해를 중요시합니다.
      </div>
      <div className={styles.description}>
        저의 개발 목표는 유저에게 있어서 최고의 경험과 <br/>
        비즈니스 가치를 구현하는 것입니다. <br/>
      </div>
      <div className={styles.description}>
        프로덕터의 일부의 그림을 그리는 것이아니라 <br/>
        인프라 아키텍쳐 부터 이해하고 토론하며 <br/>
        설계하여 큰 그림을 그리면서 팀원들이 하나의 목표를 향해 <br/>
        맞춰 가는 것을 좋아합니다. <br/>
      </div>
      <br/><br/>
      <div className={styles.title}>
        개발 인생
      </div>
      <div className={styles.description}>
        대학생 시기에는 알고리즘과 자료구조에 집중하며 <br/>
        개발은 주로 Android(java) / IOS(swift) 집중하였습니다.
        <span style={{fontSize: '1.4rem', color: 'gray'}}> (2016~2019)</span>
      </div>
      <div className={styles.description}>
        하이브리드 앱을 개발하는 중 웹에 흥미가 생겨 웹에 관한 지식을 습득하며 <br/>
        현재는 웹에 대한 커리어를 올리고 있습니다.
      </div>
      <div className={styles.description}>
        하이브리드 앱을 개발하는 중 웹에 큰 흥미가 생겨 웹에 관한 지식을 습득하며 <br/>
        현재는 웹에 대한 커리어를 올리고 있습니다.
      </div>
    </div>
  )
});

export default AboutSection;