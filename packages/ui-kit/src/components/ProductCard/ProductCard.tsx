/* eslint-disable react/style-prop-object */
import React from 'react'
import { Theme } from 'shared/src/types'
import { priceDetails } from 'shared/src/utils'
import { Item } from 'shared/src/item'
import { Text } from '../Text/Text'
import styles from './product-card.module.scss'
import { Icon } from '../Icon/Icon'
import { Rating } from '../Rating/Rating'
import { Badge } from '../Badge/Badge'
import { Image } from '../Image/Image'

interface ProductCardProps {
  theme?: Theme
  product: Item
  bestSeller?: boolean
}

const ProductCard = ({
  theme = 'dark',
  bestSeller = true,
  product: {
    title,
    seller,
    price: { currency, amount, decimals },
    originalPrice: { amount: originalAmount, decimals: originalDecimals },
    colorCount,
    reviewCount,
    freeShipping,
    picture,
  },
}: ProductCardProps) => {
  const { formattedPrice, formattedOriginalPrice, discountPct } = priceDetails(
    currency,
    amount,
    decimals,
    originalAmount,
    originalDecimals
  )

  return (
    <div className={`${styles.container} ${styles[`container--${theme}`]}`}>
      <div className={styles['product-card']}>
        <div className={styles.product}>
          <div className={styles.image}>
            <Image size="medium" src={picture || '/placeholder-images/medium.png'} />
          </div>
          <div className={styles['product-details']}>
            <div className={styles['title-price-rating']}>
              <div className={styles['title-price']}>
                {bestSeller && (
                  <div className={styles.badge}>
                    <Badge color="green" theme={theme}>
                      MÁS VENDIDO
                    </Badge>
                  </div>
                )}

                <div className={styles.title}>
                  <Text size="h3" level="title" theme={theme}>
                    {title}
                  </Text>

                  <Text level="tertiary" theme={theme}>
                    Vendido por {seller}
                  </Text>
                </div>

                <div className={styles.price}>
                  <Text level="tertiary" style="strikethrough" theme={theme}>
                    {formattedOriginalPrice}
                  </Text>

                  <div className={styles['final-price']}>
                    <Text size="h1" level="title" theme={theme}>
                      {formattedPrice}
                    </Text>
                    {discountPct > 0 && (
                      <Text theme={theme} color="green" level="title">
                        {discountPct}% OFF
                      </Text>
                    )}
                  </div>

                  <div className={styles['payment-conditions']}>
                    <Text theme={theme} level="tertiary">
                      en
                    </Text>
                    {/** TODO */}
                    <Text theme={theme} color="green" level="title">
                      12x $33.332 sin interés
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles['rating-availability']}>
                <div className={styles.rating}>
                  <Rating theme={theme} reviewCount={reviewCount} />
                </div>

                {colorCount && (
                  <Text level="tertiary" theme={theme}>
                    Disponible en {colorCount} {colorCount > 1 ? 'colores' : 'color'}
                  </Text>
                )}
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
        </div>
        <div className={styles.label}>
          <Text level="tertiary" theme={theme}>
            Promocionado
          </Text>
        </div>
      </div>
    </div>
  )
}
export { ProductCard }
