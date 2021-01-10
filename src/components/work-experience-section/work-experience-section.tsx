import React, { memo } from 'react';
import ffgLogo from '../../img/ffg_logo.png';
import styles from './work-experience-section.module.scss';
import { projectType, workContentType } from './type';

const WorkExperienceSection = memo(() => {
  const workContent: workContentType[] = [
    {
      company: 'FukuokaFinancialGroup',
      duration: '(2019.04 ~ 현재)',
      logo: '',
      projects: [
        {
          projectName: '인증/인가 시스템',
          duration: '(19.09 ~ 20.04)',
          description: '은행내의 서비스들을 하나의 인증시스템으로 통합관리하여 고객의 정보의 보안성과 편의성을 높인다.',
          doing: [
            'OAuth2.0을 기반으로 전체적인 기능 구현 (토큰 교환 등)',
            'WebPack 및 babel 세팅 (여러 브라우저 대응)',
            '여러 단말 디자인 대응 (반응형 웹)',
            '디자이너와 함께 Conversion Rate를 높이는 디자인 구성',
            'oidc-client를 이용한 테스트용 Client(SPA) 구현',
            'Express를 사용하여 API Mock 구현',
            'Jest기반으로 UT 및 E2E 작성',
          ],
          techStack: 'Vue.js, SpringBoot(spring-security), Thymeleaf, Bootstrap, Express, Sequelize, Jest, Puppeteer, Docker, Mysql, Redis, Mybatis, AWS(code-pipeline, ECS, S3 등), 기타보안 툴',
        },
        {
          projectName: 'eKYC',
          duration: '(20.09 ~ 20.08)',
          description: '은행에 방문하지 않고 PC 혹은 스마트폰을 사용하여 본인인증을 하여 계좌 관련된 서비스를 이용할 수 있으며 복잡하게 종이로 신청했던 것을 웹으로 행해다.',
          doing: [
            'Functional Component 베이스로 Vue 작성',
            '은행원이 관리할 수 있는 열람페이지 구현',
            '이미지 및 데이터 저장 (암호화 및 복호화)',
            'Puppteer로 E2E 작성',
          ],
          techStack: 'Vue.js, Keycloak, Bootstrap, Sass, Redis, Jest, Puppeteer, Docker, AWS(pipeline, ECS, S3, Connect), 기타보안 툴',
        },
        {
          projectName: 'Client Manager',
          duration: '(20.12 ~ )',
          description: '인증인가 시스템을 사용하고 있는 내•외부 클라이언트가 좀 더 편리하게 고객관리와 고객이 요구하는 사항을 손쉽게 대응 할 수 있는 관리자 페이지',
          doing: [
            'React Hierarchy 구성',
            'oidc-client-redux를 사용하여 로그인(토큰) 관리',
            '전반적인 UX/UI 디자인',
            'hooks UT, Component UT 작성',
          ]       ,
          techStack: 'React(ts), Oidc-client, PostCSS, Sass, MaterialUI, Jest, Docker, Keycloak'
        }
      ]
    }
  ];

  const renderCompanies = () => (
    workContent.map(x => (
      <div key={x.company}>
        <div className={styles.companyName}>
          {x.company}
          <span className={styles.sub}>{x.duration}</span>
        </div>
        <hr className={styles.underline}/>
        {renderProjects(x.projects)}
      </div>
    ))
  )

  const renderProjects = (projects: projectType[]) => (
    projects.map((project: projectType) => (
      <div key={project.projectName}>
        <div className={styles.projectName}>
          {project.projectName}
          <span className={styles.sub}>{project.duration}</span>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectSubName}>
            description
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.item}>
              <div className={styles.content}>
                {project.description}
              </div>
            </div>
          </div>
          <div className={styles.projectSubName}>what did i do</div>
          <div className={styles.projectDescription}>
            {
              project.doing.map(item => (
                <div className={styles.item} key={item}>
                  <div className={styles.content}>
                    {item}
                  </div>
                </div>
              ))
            }
          </div>
          <div className={styles.projectSubName}>
            tech stack
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.item}>
              <div className={styles.content}>
                {project.techStack}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )

  return (
    <div className={styles.container}>
      <img className={styles.companyLogo} src={ffgLogo} alt="ffg logo"/>
      {renderCompanies()}
    </div>
  )
});

export default WorkExperienceSection;
