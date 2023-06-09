import React, { useContext } from 'react'
import { ProductDetailsCard, TopBar } from 'ui-kit/src/components'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeContext } from '../../contexts'
import styles from './ItemDetails.module.scss'
import { Breadcrumn } from './Breadcrumb.temp'
import { useItem } from '../../hooks/useItem.hook'

const ItemDetailsPage = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const onLogoClickHandler = () => navigate('/')
  const { id } = useParams()
  const [item] = useItem(id)

  return (
    <main className={[styles.main, styles[`main--${theme}`]].join(' ')}>
      <div className={styles['top-bar']}>
        <TopBar theme={theme} onLogoClick={onLogoClickHandler} />
      </div>
      <div className={styles.container}>
        <div className={styles['items-container']}>
          <div className={styles.breadcrumb}>
            {/* TODO: feed with real categories */}
            <Breadcrumn
              theme={theme}
              categories={[
                { id: '1', name: 'Celulares y Telefonía' },
                { id: '2', name: 'Celulares y Smartphones' },
              ]}
            />
          </div>

          <div className={styles.item}>{item && <ProductDetailsCard productDetails={item} theme={theme} />}</div>
        </div>
      </div>
    </main>
  )
}

export { ItemDetailsPage }
