import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from './store/api'
import App from './App'
import './index.scss'
import { ThemeProvider } from './contexts/theme.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ApiProvider api={apiSlice}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </ThemeProvider>
  </React.StrictMode>
)
