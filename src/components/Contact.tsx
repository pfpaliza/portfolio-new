import { contact } from '../data/portfolio'
import { Reveal } from './Reveal'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Reveal className={styles.label}>CONTACT</Reveal>
      <Reveal delay={80}>
        <h2 className={styles.heading}>Let&rsquo;s build something worth maintaining.</h2>
      </Reveal>
      <Reveal delay={160} className={styles.row}>
        <a href={`mailto:${contact.email}`} className={styles.email}>
          {contact.email}
          <span className={styles.arrow} aria-hidden="true">
            &nbsp;→
          </span>
        </a>
        {contact.links.map((link) => (
          <span key={link} className={styles.link}>
            {link}
          </span>
        ))}
      </Reveal>
    </section>
  )
}
