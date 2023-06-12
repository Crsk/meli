import React, { useContext, useMemo } from 'react'
import { ProductCard, Text, TopBar } from 'ui-kit/src/components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../contexts'
import styles from './SearchResults.module.scss'
import { Breadcrumn } from './Breadcrumb.temp'
import { useGetItemsQuery } from '../../store/api'
import { randomLoadingMessage } from './random-message'

const SearchResults = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchQuery: string = searchParams.get('search') || ''
  const { data, isFetching } = useGetItemsQuery(searchQuery)

  const onLogoClickHandler = () => navigate('/')

  const handleSearch = (value: string) => {
    if (!value) return

    navigate(`/items?search=${value}`)
  }

  const items = data?.searchResult?.items
  const popularCategory = data?.searchResult?.popularCategory
  const totalCount = data?.totalCount

  // TODO: Move to category specific component
  const getCategories = useMemo(() => {
    if (popularCategory?.pathFromRoot) return popularCategory.pathFromRoot

    return [{ id: 'category', name: popularCategory?.name || 'Sin categoría' }]
  }, [popularCategory])

  if (isFetching)
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text size="h3" level="title" color="green" theme={theme}>
          {randomLoadingMessage()}
        </Text>
      </div>
    )

  return (
    <main className={[styles.main, styles[`main--${theme}`]].join(' ')}>
      <div className={styles['top-bar']}>
        <TopBar theme={theme} value={searchQuery} onLogoClick={onLogoClickHandler} onSearch={handleSearch} />
      </div>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.info}>
            {totalCount && (
              <Text level="disabled" theme={theme}>
                {totalCount} coincidencias en total
              </Text>
            )}
            {/** TODO: move to ui-kit */}
            <Breadcrumn theme={theme} categories={getCategories} />
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
