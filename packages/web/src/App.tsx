import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.module.scss'
import { Home, NotFound } from './pages'
import { ThemeSwitcher } from './components'

function App() {
  return (
    <main>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
