import React, { useContext, useEffect, useState } from 'react'
import { ProductDetailsCard, TopBar } from 'ui-kit/src/components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ItemDetails } from 'shared/src/models'
import { ThemeContext } from '../../contexts'
import styles from './ItemDetails.module.scss'
import { Breadcrumn } from './Breadcrumb.temp'
import { getItem } from '../../api/item'

const ItemDetailsPage = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const location = useLocation()
  const onLogoClickHandler = () => navigate('/')
  const [item, setItem] = useState<ItemDetails>()
  const { id } = useParams()

  useEffect(() => {
    const fetchItem = async (itemId: string) => {
      const data = await getItem(itemId)
      setItem(data)
    }
    if (id) fetchItem(id)
  }, [id, location.search])

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
