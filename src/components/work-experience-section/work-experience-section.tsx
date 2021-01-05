import React, { memo } from 'react';
import ffgLogo from '../../img/ffg_logo.png';
import styles from './work-experience-section.module.scss';

const WorkExperienceSection = memo(() => {
  return (
    <div className={styles.container}>
      <img className={styles.companyLogo} src={ffgLogo} alt="ffg logo"/>
      <div className={styles.companyName}>
        FFG
        <span className={styles.sub}>
          (FukuokaFinancialGroup)
        </span>
        <hr className={styles.underline}/>
        <div className={styles.duration}>(2019.04 ~ 현재)</div>
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
            은행내의 서비스들을 하나의 인증시스템으로 통합관리하여
            고객의 정보의 보안성과 편의성을 높인다.
          </div>
          <div className={styles.projectSubName}>what did i do</div>
          <div className={styles.projectDescription}>
            1. OAuth2.0을 기반으로 구현 (토큰 교환 등) <br/>
            2. oidc-client를 이용한 테스트용 Client(SPA) 구현 <br/>
            3. 유저정보 관리 페이지 구현
          </div>
          <div className={styles.projectSubName}>
            tech stack
          </div>
          <div className={styles.projectDescription}>
            Front<br/>
            • Vue(js), bootstrap, thymeleaf, jest <br/>
            Backend<br/>
            • SpringBoot(spring-security)<br/>
            Env<br/>
            • AWS(pipeline, ECS, S3 등), 기타보안 툴
          </div>
        </div>
        <br/>
        {/*ekyc*/}
        <div className={styles.projectName}>
          eKYC
          <span className={styles.sub}>
          (20.09 ~ 20.08)
        </span>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectSubName}>description</div>
          <div className={styles.projectDescription}>
            은행에 방문하지 않고 PC 혹은 스마트폰을 사용하여 본인인증을 하여
            계좌 관련된 서비스를 이용할 수 있으며 복잡하게 종이로 신청했던 것을 웹으로 행해다.
          </div>
          <div className={styles.projectSubName}>what did i do</div>
          <div className={styles.projectDescription}>
            1. 은행원이 관리할 수 있는 열람페이지 구현 <br/>
            2. 이미지 및 데이터 저장 (암호화 및 복호화)<br/>
            3. 인증 API 연결
          </div>
          <div className={styles.projectSubName}>tech stack</div>
          <div className={styles.projectDescription}>
            Front<br/>
            • Vue(js), bootstrap, Sass, jest <br/>
            Backend<br/>
            • Keycloak<br/>
            Env<br/>
            • AWS(pipeline, ECS, S3, Connect 등), 기타보안 툴
          </div>
        </div>
        <br/>
        {/*clientManager*/}
        <div className={styles.projectName}>
          Client Manager
          <span className={styles.sub}>
          (20.12 ~ )
        </span>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectSubName}>description</div>
          <div className={styles.projectDescription}>
            인증인가 시스템을 사용하고 있는 내•외부 클라이언트가
            좀 더 편리하게 고객관리와 고객이 요구하는 사항을 손쉽게
            대응 할 수 있는 관리자 페이지
          </div>
          <div className={styles.projectSubName}>what i'm doing</div>
          <div className={styles.projectDescription}>
            1. React Hierarchy 구성<br/>
            2. oidc-client-redux를 사용하여 로그인(토큰) 관리<br/>
            3. 전체적인 UX/UI 디자인
          </div>
          <div className={styles.projectSubName}>tech stack</div>
          <div className={styles.projectDescription}>
            Front<br/>
            • React(ts), PostCSS, MaterialUI, jest<br/>
            Backend<br/>
            • Keycloak<br/>
          </div>
        </div>
      </div>
    </div>
  )
});

export default WorkExperienceSection;
