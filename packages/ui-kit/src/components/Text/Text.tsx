import React from 'react'
import styles from './text.module.scss'

type TextSize = 'xs' | 's' | 'body' | 'body-bigger' | 'h3' | 'h2' | 'h1' | 'l' | 'xl' | 'xxl'
type TextLevel = 'title' | 'primary' | 'secondary' | 'tertiary' | 'disabled'
type TextStyle = 'regular' | 'semi-bold' | 'bold' | 'italic' | 'strikethrough' | 'semi-bold--italic' | 'bold--italic'

interface TextProps {
  level?: TextLevel
  size?: TextSize
  style?: TextStyle
  theme?: 'dark' | 'light'
  children: React.ReactNode
}

const Text = ({ level = 'primary', size = 'body', style = 'regular', theme = 'dark', children }: TextProps) => {
  const textStyle = `${styles.text} ${styles[`text--${size}`]} ${styles[`text--${level}--${theme}`]} ${styles[style]}`

  return <span className={textStyle}>{children}</span>
}

export { Text }
