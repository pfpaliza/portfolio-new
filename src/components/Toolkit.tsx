import { toolkit } from '../data/portfolio'
import styles from './Toolkit.module.css'

export function Toolkit() {
  return (
    <section className={styles.toolkit}>
      <div className={styles.label}>TOOLKIT</div>
      <div className={styles.groups}>
        {toolkit.map((group) => (
          <div key={group.label}>
            <div className={styles.groupLabel}>{group.label}</div>
            <div className={styles.items}>
              {group.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < group.items.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
