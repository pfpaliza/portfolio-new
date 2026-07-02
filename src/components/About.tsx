import { Reveal } from './Reveal'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={styles.about}>
      <Reveal className={styles.label}>ABOUT</Reveal>
      <Reveal delay={80} className={styles.copy}>
        <p className={styles.lead}>
          I like the unglamorous middle of the stack — the queues, the migrations, the edge cases — because
          that&rsquo;s where reliability is really decided.
        </p>
        <p className={styles.body}>
          Previously I led platform teams building payments and analytics tooling. Today I split my time between
          hands-on engineering and helping small teams get their architecture right before they scale.
        </p>
      </Reveal>
    </section>
  )
}
