import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const style = delay ? ({ transitionDelay: `${delay}ms` } as CSSProperties) : undefined

  return (
    <div
      ref={ref}
      className={[styles.reveal, isInView && styles.visible, className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}
