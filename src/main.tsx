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

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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

  #root {
    width: 100%;
    height: 100%;
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

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          color: '#ff0000',
          fontFamily: 'monospace'
        }}>
          <h1>Something went wrong.</h1>
          <p>Please check the console for more details.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Global styles={globalStyles} />
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)