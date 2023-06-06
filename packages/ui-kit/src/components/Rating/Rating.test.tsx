import React from 'react'
import { render } from '@testing-library/react'
import { Rating } from './Rating'

describe('Rating', () => {
  test.each`
    theme        | reviewCount  | expectedReviewCount
    ${undefined} | ${undefined} | ${'0'}
    ${'light'}   | ${10}        | ${'10'}
    ${undefined} | ${-5}        | ${'0'}
    ${undefined} | ${1000000}   | ${'1,000,000'}
  `('renders stars with $theme theme and $reviewCount review count', ({ theme, reviewCount, expectedReviewCount }) => {
    const { container } = render(<Rating theme={theme} reviewCount={reviewCount} />)
    const stars = container.querySelectorAll('.stars > *')
    const reviewCountElement = container.querySelector('.review-count')

    expect(stars.length).toBe(5)
    expect(reviewCountElement?.textContent).toBe(expectedReviewCount)

    if (theme) expect(reviewCountElement).toHaveClass(`review-count--${theme}`)
  })
})
