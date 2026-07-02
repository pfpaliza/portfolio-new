import { useTheme } from '../theme/ThemeContext'
import styles from './Header.module.css'

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <span className={styles.dot} />
        PPC
      </span>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#work">
          WORK
        </a>
        <a className={styles.navLink} href="#about">
          ABOUT
        </a>
        <a className={styles.navLink} href="#contact">
          CONTACT
        </a>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <span key={theme} className={styles.toggleLabel}>
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </span>
        </button>
      </nav>
    </header>
  )
}
