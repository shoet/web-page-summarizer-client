import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/index.ts'
import { GlobalStyle } from './components/Layout/GlobalStayle/index.tsx'
import { AuthContextProvider } from './context/AuthContext/index.tsx'
import { Routes } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
