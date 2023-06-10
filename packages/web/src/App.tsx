import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.module.scss'
import { Home, ItemDetailsPage, NotFound, SearchResults } from './pages'
import { ThemeSwitcher } from './components'
import { ThemeContext } from './contexts'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={`${theme}`}>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items">
          <Route path="" element={<SearchResults />} />
          <Route path=":id" element={<ItemDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
