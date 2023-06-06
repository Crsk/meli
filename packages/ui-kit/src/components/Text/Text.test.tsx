/* eslint-disable react/style-prop-object */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Text } from './Text'

describe('Text', () => {
  it('renders without crashing', () => {
    render(
      <Text level="tertiary" size="xs" style="strikethrough" theme="light">
        Batman
      </Text>
    )
    expect(screen.getByText('Batman')).toBeInTheDocument()
  })

  it('defaults to primary level, body size, regular style and dark theme when no props provided', () => {
    render(<Text>Test</Text>)

    const text = screen.getByText('Test')

    expect(text).toHaveClass('text')
    expect(text).toHaveClass('text--body')
    expect(text).toHaveClass('text--primary--dark')
    expect(text).toHaveClass('regular')
  })

  test.each`
    level          | size      | style              | theme
    ${'secondary'} | ${'xl'}   | ${'bold'}          | ${'dark'}
    ${'title'}     | ${'xxl'}  | ${'semi-bold'}     | ${'light'}
    ${'primary'}   | ${'body'} | ${'italic'}        | ${'dark'}
    ${'tertiary'}  | ${'s'}    | ${'strikethrough'} | ${'light'}
  `(
    'applies the correct styles based on props: level=$level, size=$size, style=$style, theme=$theme',
    ({ level, size, style, theme }) => {
      render(
        <Text level={level} size={size} style={style} theme={theme}>
          Test
        </Text>
      )

      const text = screen.getByText('Test')

      expect(text).toHaveClass('text')
      expect(text).toHaveClass(`text--${size}`)
      expect(text).toHaveClass(`text--${level}--${theme}`)
      expect(text).toHaveClass(style)
    }
  )
})
