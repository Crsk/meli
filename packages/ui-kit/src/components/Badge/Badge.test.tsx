import React from 'react'
import { render } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  test.each`
    theme        | color        | expectedClassName                     | childComponent                 | expectedTextContent
    ${undefined} | ${undefined} | ${'container container--dark--green'} | ${'Default Badge'}             | ${'Default Badge'}
    ${'light'}   | ${'blue'}    | ${'container container--light--blue'} | ${'Custom Badge'}              | ${'Custom Badge'}
    ${undefined} | ${undefined} | ${'container container--dark--green'} | ${(<span>CUSTOM CHILD</span>)} | ${'CUSTOM CHILD'}
  `(
    'renders with $theme theme, $color color, and child component: $childComponent',
    ({ theme, color, expectedClassName, childComponent, expectedTextContent }) => {
      const { container } = render(
        <Badge theme={theme} color={color}>
          {childComponent}
        </Badge>
      )
      const badgeContainer = container.firstChild

      expect(badgeContainer).toHaveClass(expectedClassName)
      expect(badgeContainer).toHaveTextContent(expectedTextContent)
    }
  )
})
