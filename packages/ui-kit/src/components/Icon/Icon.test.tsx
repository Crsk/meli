import React from 'react'
import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  test.each`
    type             | id
    ${'arrow-right'} | ${'arrow-right'}
    ${'sort'}        | ${'sort'}
    ${'sort-desc'}   | ${'sort-desc'}
    ${'sort-asc'}    | ${'sort-asc'}
    ${'search'}      | ${'search'}
    ${'ray'}         | ${'ray'}
    ${'star'}        | ${'star'}
  `('renders the $type icon', ({ type, id }) => {
    const { getByTestId } = render(<Icon type={type as any} />)
    const icon = getByTestId(type)

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('icon-container')
    expect(icon.firstChild).toBeInTheDocument()
    expect(getByTestId(id)).toBeInTheDocument()
  })

  it('renders null when type is not recognized', () => {
    const { container } = render(<Icon type={'batman' as any} />)
    expect(container.firstChild).toBeNull()
  })
})
