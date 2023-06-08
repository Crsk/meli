import React from 'react'
import { Theme } from 'shared/src/types'
import { LogoVector } from './Logo.vector'
import { LogoSize } from './properties'

interface LogoProps {
  theme?: Theme
  size?: LogoSize
  onClick?: () => void
}

const Logo = ({ theme = 'dark', size = 'S', onClick = () => {} }: LogoProps) => (
  <button onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none' }}>
    <div>{LogoVector(theme, size)}</div>
  </button>
)

export { Logo }
