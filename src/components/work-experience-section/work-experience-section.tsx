import React, { memo } from 'react';
import ffgLogo from '../../img/ffg_logo.png';
import styles from './work-experience-section.module.scss';
import { projectType } from './type';
import useWorkSection from './hooks/use-work-section';

const WorkExperienceSection = memo(() => {
  const { workContent } = useWorkSection();

  const renderCompanies = () => (
    workContent?.map(x => (
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
