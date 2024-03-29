import React from 'react'
import './icon.scss'
import { ArrowRight, Ray, Search, Sort, SortAsc, SortDesc, Star } from './vectors'

interface IconProps {
  type: 'arrow-right' | 'sort' | 'sort-desc' | 'sort-asc' | 'search' | 'ray' | 'star'
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

  if (type === 'ray')
    return (
      <div data-testid="ray" className="icon-container">
        {Ray(theme)}
      </div>
    )

  if (type === 'star')
    return (
      <div data-testid="star" className="icon-container">
        {Star(theme)}
      </div>
    )

  return null
}

export { Icon }
