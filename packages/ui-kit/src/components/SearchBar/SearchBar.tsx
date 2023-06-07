import React, { useState } from 'react'
import styles from './search-bar.module.scss'
import { Icon } from '../Icon/Icon'

type SearchBarProps = {
  placeholder: string
  onSearch: (searchValue: string) => void
  theme?: 'light' | 'dark'
}

const SearchBar = ({ placeholder, onSearch, theme = 'dark' }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('')
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && onSearch(searchValue)

  return (
    <div className={`${styles[`search-bar`]} ${styles[`search-bar--${theme}`]}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        onKeyDown={handleKeyDown}
        className={`${styles['search-bar--input']} ${styles[`search-bar--input--${theme}`]}`}
      />
      <button onClick={() => onSearch(searchValue)} className={styles.button}>
        <Icon type="search" theme={theme} />
      </button>
    </div>
  )
}

export { SearchBar }
