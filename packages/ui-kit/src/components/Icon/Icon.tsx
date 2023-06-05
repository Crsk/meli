import React from 'react'
import './icon.scss'
import { ArrowRight, Search, Sort, SortAsc, SortDesc } from './vectors'

interface IconProps {
  type: 'arrow-right' | 'sort' | 'sort-desc' | 'sort-asc' | 'search'
  theme?: 'light' | 'dark'
}

const Icon = ({ type = 'arrow-right', theme = 'dark' }: IconProps) => {
  if (type === 'arrow-right')
    return (
      <div data-testid="arrow-right" className="icon-container">
        {ArrowRight(theme)}
      </div>
    )
  if (type === 'sort')
    return (
      <div data-testid="sort" className="icon-container">
        {Sort(theme)}
      </div>
    )
  if (type === 'sort-desc')
    return (
      <div data-testid="sort-desc" className="icon-container">
        {SortDesc(theme)}
      </div>
    )
  if (type === 'sort-asc')
    return (
      <div data-testid="sort-asc" className="icon-container">
        {SortAsc(theme)}
      </div>
    )
  if (type === 'search')
    return (
      <div data-testid="search" className="icon-container">
        {Search(theme)}
      </div>
    )

  return null
}

export default Icon
