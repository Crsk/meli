import React from 'react'
import { LogoVector } from './Logo.vector'
import { LogoSize } from './properties'
import { Theme } from 'shared/src/types'

interface LogoProps {
  theme?: Theme
  size?: LogoSize
}

const Logo = ({ theme = 'dark', size = 'S' }: LogoProps) => <div>{LogoVector(theme, size)}</div>

export { Logo }
