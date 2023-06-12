import React, { useContext, useMemo } from 'react'
import { ProductDetailsCard, Text, TopBar } from 'ui-kit/src/components'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeContext } from '../../contexts'
import styles from './ItemDetails.module.scss'
import { Breadcrumn } from './Breadcrumb.temp'
import { useGetItemQuery } from '../../store/api'
import { randomLoadingMessage } from '../SearchResultsPage/random-message'

const ItemDetailsPage = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const onLogoClickHandler = () => navigate('/')
  const { id } = useParams()
  const { data: response, isFetching } = useGetItemQuery(id!)

  const handleSearch = (value: string) => {
    if (!value) return

    navigate(`/items?search=${value}`)
  }

  // TODO: Move to category specific component
  const getCategories = useMemo(() => {
    if (response?.category?.pathFromRoot) return response.category.pathFromRoot

    return [{ id: 'category', name: response?.category?.name || 'Sin categoría' }]
  }, [response])

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
        <TopBar theme={theme} onLogoClick={onLogoClickHandler} onSearch={handleSearch} />
      </div>
      <div className={styles.container}>
        <div className={styles['items-container']}>
          {/** TODO: move to ui-kit */}
          <div className={styles.breadcrumb}>
            <Breadcrumn theme={theme} categories={getCategories} />
          </div>

          <div className={styles.item}>
            {response && <ProductDetailsCard productDetails={response} theme={theme} />}
          </div>
        </div>
      </div>
    </main>
  )
}

export { ItemDetailsPage }
