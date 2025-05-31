import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyRouter from './MyRouter.jsx'

createRoot(document.getElementById('root')).render(<MyRouter />)
