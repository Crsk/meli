import React from 'react'
import { render } from '@testing-library/react'
import { Image } from './Image'

describe('Image Component', () => {
  test.each`
    src              | alt          | size       | expectedSrc
    ${undefined}     | ${undefined} | ${'small'} | ${'./placeholder-images/small.png'}
    ${'example.jpg'} | ${undefined} | ${'large'} | ${'example.jpg'}
  `('renders with $src src, $alt alt and $size size', ({ src, alt, size, expectedSrc }) => {
    const { container } = render(<Image src={src} alt={alt} size={size} />)
    const imageElement = container.firstChild

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', expectedSrc)
  })
})
