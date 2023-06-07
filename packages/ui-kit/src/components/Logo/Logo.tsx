import React from 'react'
import { Theme } from 'shared/src/types'
import { LogoVector } from './Logo.vector'
import { LogoSize } from './properties'

interface LogoProps {
  theme?: Theme
  size?: LogoSize
}

const Logo = ({ theme = 'dark', size = 'S' }: LogoProps) => <div>{LogoVector(theme, size)}</div>

export { Logo }
