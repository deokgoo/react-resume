import React, { memo } from 'react';
import styles from './skill-section.module.scss';
import { skillType } from './type';

const SkillSection = memo(() => {
  const skillContent: skillType[] = [
    {
      title: 'OverAll',
      contents: [
        '모국어는 한국어이며, 일본어는 업무에 있어서의 소통은 가능 하나 한자에 약합니다, 영어는 기본적인 듣기는 가능하나 말하는것은 약합니다.',
        '작업 프로세스에 있어서 개선 사항이 있다면 적극적으로 건의 하고 바꾸려고 합니다.',
        '업무에 적용하면 좋은 기술스택이 있다면 적용하려고 노력합니다.',
        '적극적으로 커뮤니케이션 하며 빈도를 높이려고 노력합니다.',
        'hook을 사용하여 functional Component 만드는데 능숙하며 class type의 컴포넌트도 이해합니다. hook을 활용하여 모듈화 하여 사용할 수 있습니다.',

      ]
    },
    {
      title: 'React',
      contents: [
        'hook을 사용하여 functional Component 만드는데 능숙하며 class type의 컴포넌트도 이해합니다. hook을 활용하여 모듈화 하여 사용할 수 있습니다.',
        'memo, useCallback 상황에 맞게 사용하여 최적의 성능을 낼 수 있게 합니다.',
        '컴포넌트 디자인 패턴을 이해하고 적용합니다.',
      ],
    },
    {
      title: 'JS/TS',
      contents: [
        'ES6 이상의 문법과 ESLint에 익숙합니다.',
        '상황에 따라 함수형 프로그래밍을 적용할 수 있습니다.',
        'VanilaJS에 익숙합니다 (DOM API)',
        '타입스크립트 작성에 익숙합니다.',
      ]
    },
    {
      title: 'HTML/CSS',
      contents: [
        'HTML작성에 있어 적절한 태그를 사용합니다(semantic tag)',
        'SEO에 최적화 할 수 있는 메타 태그를 작성합니다.',
        'Media Query를 적절하게 사용하여 반응형 웹을 만듭니다.',
        'Sass 및 PosctCSS를 사용할 수 있습니다.'
      ]
    },
    {
      title: 'Tool',
      contents: [
        'IDE는 주로 Intellij를 사용하며 상황에 따라 VisualCode를 사용합니다.',
        'Task관리는 Slack, Trello, Notion, RedMine, asana를 사용한 경험이 있습니다.',
      ],
    },
    {
      title: 'ETC',
      contents: [
        'CIrcleCI, Jenkins, aws pipeline을 사용해본 경험이 있습니다.',
        'docker를 사용하여 개발 환경을 만들거나 이미지 push를 할 수 있습니다.',
        'AWS(ECS, EC2, S3 등)을 사용한 경험이 있습니다.',
      ],
    }
  ]
  const renderSkills = () => (
    skillContent.map(skill => (
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
