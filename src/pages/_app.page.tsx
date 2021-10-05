import React from 'react'
import type { AppProps } from 'next/app';
import NextApp from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: #f5f5f5;
  }
`

const App: React.FC<AppProps> = (props) => (
  <>
    <GlobalStyles />
    <NextApp {...props} />
  </>
)

export default App
