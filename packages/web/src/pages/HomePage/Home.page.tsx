import React, { useContext } from 'react'
import { Logo, SearchBar } from 'ui-kit/src/components'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../contexts'
import styles from './Home.module.scss'

const Home = () => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)

  const handleSearch = (value: string) => {
    if (!value) return

    navigate(`/items?search=${value}`)
  }

  return (
    <main>
      <div className={[styles.container, styles[`container--${theme}`]].join(' ')}>
        <div className={styles.logo}>
          <Logo size="L" theme={theme} />
        </div>
        <div className={styles['search-bar']}>
          <SearchBar onSearch={handleSearch} placeholder="Nunca dejes de buscar" theme={theme} />
        </div>
      </div>
    </main>
  )
}

export { Home }
