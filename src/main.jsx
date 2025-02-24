import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OpenCloseContextProvider from './Context/OpenCloseContext/OpenCloseContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
 <BrowserRouter>
    <OpenCloseContextProvider>
    <App />
  </OpenCloseContextProvider>
 </BrowserRouter>
)
