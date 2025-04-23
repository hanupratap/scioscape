import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #fff;
    --text: #111;
    --accent: #111;
    --secondary: #eaeaea;
  }

  body {
    font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
    font-size: 18px;
    letter-spacing: -0.01em;
    font-weight: 400;
    min-height: 100vh;
  }

  a {
    color: var(--accent);
    text-decoration: underline;
    transition: color 0.2s;
  }

  a:hover {
    color: #888;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: 3px;
  }

  ::selection {
    background: var(--accent);
    color: var(--background);
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
)