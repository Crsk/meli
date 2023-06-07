import React from 'react'
import './button.scss'
import { Icon } from '../Icon/Icon'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  label: string
  icon?: 'arrow-right'
  onClick?: () => void
}

export const Button = ({ size = 'medium', label, icon = 'arrow-right', ...props }: ButtonProps) => (
  <button type="button" className={['button', `button--${size}`].join(' ')} {...props}>
    {label}
    {icon === 'arrow-right' && <Icon type="arrow-right" />}
  </button>
)
