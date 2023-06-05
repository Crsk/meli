import React from 'react'

const Search = (theme: 'dark' | 'light' = 'dark') => (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.39453" cy="6.36865" r="5.5" stroke={theme === 'dark' ? 'white' : 'black'} />
    <line x1="10.7481" y1="10.0151" x2="16.7481" y2="16.0151" stroke={theme === 'dark' ? 'white' : 'black'} />
  </svg>
)

export { Search }
