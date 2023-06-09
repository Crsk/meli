/* eslint-disable react/style-prop-object */
import React, { useMemo } from 'react'
import { ItemDetails } from 'shared/src/models'
import { Theme } from 'shared/src/types'
import { bigNumberShortener, priceDetails } from 'shared/src/utils'
import styles from './product-details-card.module.scss'
import { Image } from '../Image/Image'
import { Text } from '../Text/Text'
import { Rating } from '../Rating/Rating'
import { Icon } from '../Icon/Icon'
import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'

interface ProductDetailsCardProps {
  theme?: Theme
  productDetails: ItemDetails
}

const ProductDetailsCard = ({
  theme = 'dark',
  productDetails: {
    title,
    price: { currency, amount, decimals },
    originalPrice,
    condition,
    reviewCount,
    freeShipping,
    soldQuantity,
    description,
  },
}: ProductDetailsCardProps) => {
  const { formattedPrice, formattedOriginalPrice, discountPct } = priceDetails(
    currency,
    amount,
    decimals,
    originalPrice.amount,
    originalPrice.decimals
  )
  const soldQuantityText = useMemo(
    () => bigNumberShortener(soldQuantity, soldQuantity === 1 ? 'VENDIDO' : 'VENDIDOS'),
    [soldQuantity]
  )

  return (
    <div className={`${styles.container} ${styles[`container--${theme}`]}`}>
      <div className={styles['product-card']}>
        <div className={styles.product}>
          <div className={styles.image}>
            <Image size="large" />
          </div>
          <div className={styles['product-details']}>
            <div className={styles.product}>
              <div className={styles.details}>
                <div className={styles['title-price-rating']}>
                  <Badge color="green" theme={theme}>
                    {soldQuantityText}
                  </Badge>

                  <Text size="xl" style="semi-bold" level="title" theme={theme}>
                    {title}
                  </Text>

                  <Rating theme={theme} reviewCount={reviewCount} />

                  <div className={styles.price}>
                    <Text level="tertiary" style="strikethrough" theme={theme}>
                      {formattedOriginalPrice}
                    </Text>

                    <div className={styles['final-price']}>
                      <Text size="h1" level="title" theme={theme}>
                        {formattedPrice}
                      </Text>
                      <Text theme={theme} color="green" level="title">
                        {discountPct}% OFF
                      </Text>
                    </div>

                    <div className={styles['payment-conditions']}>
                      <Text theme={theme} level="tertiary">
                        en
                      </Text>
                      <Text theme={theme} color="green" level="title">
                        {condition}
                      </Text>
                    </div>
                  </div>
                </div>
                {freeShipping && (
                  <div className={styles.shipping}>
                    <Text style="bold" theme={theme} color="green" level="title">
                      Envío gratis
                    </Text>

                    <div className={styles.full}>
                      <div className={styles.ray}>
                        <Icon type="ray" theme={theme} />
                      </div>
                      <Text style="bold--italic" theme={theme} color="green" level="title">
                        FULL
                      </Text>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles['buy-now']}>
                <Button label="Comrar ahora" size="medium" />
              </div>
            </div>

            <div className={styles.description}>
              <Text level="primary" theme={theme}>
                {description}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductDetailsCard }
