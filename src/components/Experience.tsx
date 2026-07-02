import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.label}>EXPERIENCE</div>
      <div className={styles.list}>
        {experience.map((entry, i) => (
          <div key={entry.role} className={i === experience.length - 1 ? styles.rowLast : styles.row}>
            <div>
              <div className={styles.role}>{entry.role}</div>
              <div className={styles.detail}>{entry.detail}</div>
            </div>
            <span className={styles.range}>{entry.range}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
