import React from 'react'
import styles from './rating.module.scss'
import Icon from '../Icon/Icon'

interface RatingProps {
  theme?: 'dark' | 'light'
  reviewCount?: number
}

const Rating = ({ theme = 'dark', reviewCount = 0 }: RatingProps) => {
  const sanitizedReviewCount = reviewCount < 0 ? 0 : reviewCount
  const formattedReviewCount = new Intl.NumberFormat().format(sanitizedReviewCount)

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        <Icon type="star" theme={theme} />
        <Icon type="star" theme={theme} />
        <Icon type="star" theme={theme} />
        <Icon type="star" theme={theme} />
        <Icon type="star" theme={theme} />
      </div>
      <span className={`${styles['review-count']} ${styles[`review-count--${theme}`]}`}>{formattedReviewCount}</span>
    </div>
  )
}

export { Rating }
