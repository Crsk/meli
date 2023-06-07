import React from 'react'
import styles from './image.module.scss'

interface ImageProps {
  src?: string | undefined
  alt?: string
  size?: 'small' | 'medium' | 'large'
}

const Image = ({ src, alt = '', size = 'medium' }: ImageProps) => {
  const classNames = [styles.image, styles[`image--${size}`]].join(' ')

  return <img src={src || `./placeholder-images/${size}.png`} alt={alt} className={classNames} />
}

export { Image }
