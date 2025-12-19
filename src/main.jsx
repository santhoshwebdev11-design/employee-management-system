import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextProveder from './context/AuthContextProveder.jsx'


createRoot(document.getElementById('root')).render(
  
    <AuthContextProveder>
         <App />
    </AuthContextProveder>
      
    
  ,
)
