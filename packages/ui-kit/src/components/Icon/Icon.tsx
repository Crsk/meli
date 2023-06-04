import React from 'react'
import './icon.scss'
import { ArrowRight, Sort, SortAsc, SortDesc } from './vectors'

interface IconProps {
  type: 'arrow-right' | 'sort' | 'sort-desc' | 'sort-asc'
}

const Icon = ({ type = 'arrow-right' }: IconProps) => {
  if (type === 'arrow-right')
    return (
      <div data-testid="arrow-right" className="icon-container">
        {ArrowRight}
      </div>
    )
  if (type === 'sort')
    return (
      <div data-testid="sort" className="icon-container">
        {Sort}
      </div>
    )
  if (type === 'sort-desc')
    return (
      <div data-testid="sort-desc" className="icon-container">
        {SortDesc}
      </div>
    )
  if (type === 'sort-asc')
    return (
      <div data-testid="sort-asc" className="icon-container">
        {SortAsc}
      </div>
    )

  return null
}

export default Icon
