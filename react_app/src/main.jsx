import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Leftpanel from '../Components/Leftpanel.jsx'
import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Leftpanel/>
  </StrictMode>,
)
