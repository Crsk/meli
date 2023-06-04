import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test.each`
    size         | expectedClass
    ${'small'}   | ${'button--small'}
    ${'medium'}  | ${'button--medium'}
    ${'large'}   | ${'button--large'}
    ${undefined} | ${'button--medium'}
  `('renders a button with $size size and label', ({ size, expectedClass }) => {
    const { getByText } = render(<Button label="Button" size={size} />)
    const button = getByText('Button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button')
    expect(button).toHaveClass(expectedClass)
  })

  it('calls onClick when the button is clicked', () => {
    const onClick = vi.fn()
    const { getByText } = render(<Button label="Button" onClick={onClick} />)
    const button = getByText('Button')

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders an icon when icon prop is "arrow-right"', () => {
    const { getByTestId } = render(<Button label="Button" icon="arrow-right" />)
    const icon = getByTestId('arrow-right')

    expect(icon).toBeInTheDocument()
  })
})
