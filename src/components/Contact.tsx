import { contact } from '../data/portfolio'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.label}>CONTACT</div>
      <h2 className={styles.heading}>Let&rsquo;s build something worth maintaining.</h2>
      <div className={styles.row}>
        <a href={`mailto:${contact.email}`} className={styles.email}>
          {contact.email}
        </a>
        {contact.links.map((link) => (
          <span key={link} className={styles.link}>
            {link}
          </span>
        ))}
      </div>
    </section>
  )
}
