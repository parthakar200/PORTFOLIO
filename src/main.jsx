import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BackImage } from './components/background/Background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackImage/>
    <App />
  </StrictMode>,
)
