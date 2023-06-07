import React from 'react'
import { Theme } from 'shared/src/types'
import styles from './badge.module.scss'

type BadgeColor = 'blue' | 'green' | 'yellow' | 'red'

interface BadgeProps {
  theme?: Theme
  color?: BadgeColor
  children: React.ReactNode
}

const Badge = ({ theme = 'dark', color = 'green', children }: BadgeProps) => (
  <span className={`${styles.container} ${styles[`container--${theme}--${color}`]}`}>{children}</span>
)

export { Badge }
