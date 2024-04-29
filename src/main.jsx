import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResultContextProvider } from './contexts/ResultContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </React.StrictMode>,
)
