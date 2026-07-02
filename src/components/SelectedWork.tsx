import { projects } from '../data/portfolio'
import styles from './SelectedWork.module.css'

export function SelectedWork() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>Selected work</h2>
        <span className={styles.range}>2021—2026</span>
      </div>

      {projects.map((project, i) => (
        <div key={project.title} className={i === projects.length - 1 ? styles.projectLast : styles.project}>
          <div className={styles.projectInner}>
            <span className={styles.index}>{project.index}</span>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.year}>{project.year}</span>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.shot}>{project.shotLabel}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
