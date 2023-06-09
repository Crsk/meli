import React from 'react'
import { Theme } from 'shared/src/types'
import { Text } from 'ui-kit/src/components'

/**
 * Temporary component
 * TODO: Move to ui-kit
 */
interface BreadcrumnProps {
  categories: { id: string; name: string }[]
  theme?: Theme
}
const Breadcrumn = ({ categories, theme = 'dark' }: BreadcrumnProps) => (
  <div>
    {categories.map((category, index) => (
      <Text key={category.id} size="body-bigger" theme={theme}>
        {category.name}
        {index < categories.length - 1 && (
          <Text size="body-bigger" theme={theme}>
            &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        )}
      </Text>
    ))}
  </div>
)

export { Breadcrumn }
