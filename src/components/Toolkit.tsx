import { toolkit } from '../data/portfolio'
import { Reveal } from './Reveal'
import styles from './Toolkit.module.css'

export function Toolkit() {
  return (
    <section className={styles.toolkit}>
      <Reveal className={styles.label}>TOOLKIT</Reveal>
      <div className={styles.groups}>
        {toolkit.map((group, i) => (
          <Reveal key={group.label} delay={i * 80}>
            <div className={styles.groupLabel}>{group.label}</div>
            <div className={styles.items}>
              {group.items.map((item, j) => (
                <span key={item}>
                  {item}
                  {j < group.items.length - 1 && <br />}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
