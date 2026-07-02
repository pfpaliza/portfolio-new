import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.experience}>
      <Reveal className={styles.label}>EXPERIENCE</Reveal>
      <Reveal delay={80} className={styles.list}>
        {experience.map((entry, i) => (
          <div key={entry.role} className={i === experience.length - 1 ? styles.rowLast : styles.row}>
            <div>
              <div className={styles.role}>{entry.role}</div>
              <div className={styles.detail}>{entry.detail}</div>
            </div>
            <span className={styles.range}>{entry.range}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
