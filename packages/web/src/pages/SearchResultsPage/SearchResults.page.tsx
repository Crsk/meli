import React, { useContext } from 'react'
import { ProductCard, Text, TopBar } from 'ui-kit/src/components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../contexts'
import styles from './SearchResults.module.scss'
import { Breadcrumn } from './Breadcrumb.temp'
import { useGetItemsQuery } from '../../store/api'

const SearchResults = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchQuery: string = searchParams.get('search') || ''
  const { data, isFetching } = useGetItemsQuery(searchQuery)
  const { items, totalCount } = data || {}
  const onLogoClickHandler = () => navigate('/')

  if (isFetching) return <div>Cargando...</div>

  return (
    <main className={[styles.main, styles[`main--${theme}`]].join(' ')}>
      <div className={styles['top-bar']}>
        <TopBar theme={theme} value={searchQuery} onLogoClick={onLogoClickHandler} />
      </div>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.info}>
            {totalCount && (
              <Text level="disabled" theme={theme}>
                {totalCount} coincidencias en total
              </Text>
            )}

            {/* TODO: feed with real categories */}
            <Breadcrumn
              theme={theme}
              categories={[
                { id: '1', name: 'Celulares y Telefonía' },
                { id: '2', name: 'Celulares y Smartphones' },
              ]}
            />
          </div>

          {items?.map(item => (
            <button onClick={() => navigate(`/items/${item.id}`)}>
              <ProductCard key={item.id} theme={theme} product={item} />
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export { SearchResults }
