import { ThemeProvider } from './theme/ThemeContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SelectedWork } from './components/SelectedWork'
import { Experience } from './components/Experience'
import { Toolkit } from './components/Toolkit'
import { Contact } from './components/Contact'
import styles from './App.module.css'

function App() {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <Header />
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Toolkit />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
