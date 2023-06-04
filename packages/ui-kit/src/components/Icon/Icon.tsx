import React from 'react'
import './icon.scss'
import { ArrowRight, Sort, SortAsc, SortDesc } from './vectors'

interface IconProps {
  type: 'arrow-right' | 'sort' | 'sort-desc' | 'sort-asc'
}

const Icon = ({ type = 'arrow-right' }: IconProps) => {
  if (type === 'arrow-right') return <div className="icon">{ArrowRight}</div>
  if (type === 'sort') return <div className="icon">{Sort}</div>
  if (type === 'sort-desc') return <div className="icon">{SortDesc}</div>
  if (type === 'sort-asc') return <div className="icon">{SortAsc}</div>

  return null
}

export default Icon
