import React, { memo } from 'react';
import ffgLogo from '../../img/ffg_logo.png';
import styles from './work-experience-section.module.scss';

const WorkExperienceSection = memo(() => {
  return (
    <div className={styles.container}>
      <img className={styles.companyLogo} src={ffgLogo} alt="ffg logo"/>
      <div className={styles.companyName}>
        FukuoaFinancialGroup
        <span className={styles.sub}>
          (2019.04 ~ 현재)
        </span>
      </div>
      <hr className={styles.underline}/>
      <div className={styles.projectName}>
        인증/인가 시스템
        <span className={styles.sub}>
          (19.09 ~ 20.04)
        </span>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectSubName}>
          description
        </div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              은행내의 서비스들을 하나의 인증시스템으로 통합관리하여
              고객의 정보의 보안성과 편의성을 높인다.
            </div>
          </div>
        </div>
        <div className={styles.projectSubName}>what did i do</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              OAuth2.0을 기반으로 전체적인 기능 구현 (토큰 교환 등)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              WebPack 및 babel 세팅 (여러 브라우저 대응)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              여러 단말 디자인 대응 (반응형 웹)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              디자이너와 함께 Conversion Rate를 높이는 디자인 구성
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              oidc-client를 이용한 테스트용 Client(SPA) 구현
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              Express를 사용하여 API Mock 구현
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              Jest기반으로 UT 및 E2E 작성
            </div>
          </div>
        </div>
        <div className={styles.projectSubName}>
          tech stack
        </div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              Vue.js, SpringBoot(spring-security), Thymeleaf, Bootstrap, Express, Sequelize, Jest, Puppeteer,
              Docker, Mysql, Redis, Mybatis, AWS(code-pipeline, ECS, S3 등), 기타보안 툴
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className={styles.projectName}>
        eKYC
        <span className={styles.sub}>
          (20.09 ~ 20.08)
        </span>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectSubName}>description</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              은행에 방문하지 않고 PC 혹은 스마트폰을 사용하여 본인인증을 하여
              계좌 관련된 서비스를 이용할 수 있으며 복잡하게 종이로 신청했던 것을 웹으로 행해다.
            </div>
          </div>
        </div>
        <div className={styles.projectSubName}>what did i do</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              Functional Component 베이스로 Vue 작성
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              은행원이 관리할 수 있는 열람페이지 구현
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              이미지 및 데이터 저장 (암호화 및 복호화)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              Puppteer로 E2E 작성
            </div>
          </div>
        </div>
        <div className={styles.projectSubName}>tech stack</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              Vue.js, Keycloak, Bootstrap, Sass, Redis, Jest, Puppeteer, Docker
              AWS(pipeline, ECS, S3, Connect), 기타보안 툴
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className={styles.projectName}>
        Client Manager
        <span className={styles.sub}>
          (20.12 ~ )
        </span>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectSubName}>description</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              인증인가 시스템을 사용하고 있는 내•외부 클라이언트가
              좀 더 편리하게 고객관리와 고객이 요구하는 사항을 손쉽게
              대응 할 수 있는 관리자 페이지
            </div>
          </div>
        </div>
        <div className={styles.projectSubName}>what i'm doing</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              React Hierarchy 구성
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              oidc-client-redux를 사용하여 로그인(토큰) 관리
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              전반적인 UX/UI 디자인
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              hooks UT, Component UT 작성
            </div>
          </div>
        </div>
        <div className={styles.projectSubName}>tech stack</div>
        <div className={styles.projectDescription}>
          <div className={styles.item}>
            <div className={styles.content}>
              React(ts), Oidc-client, PostCSS, Sass, MaterialUI, Jest, Docker, Keycloak
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default WorkExperienceSection;
