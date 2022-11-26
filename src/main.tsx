import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { IssuesProvider } from './contexts/IssuesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IssuesProvider>
      <App />
    </IssuesProvider>
  </React.StrictMode>
)
