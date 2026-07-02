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
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? 'DARK' : 'LIGHT'}
        </button>
      </nav>
    </header>
  )
}
