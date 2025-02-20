import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OpenCloseContextProvider from './Context/OpenCloseContext/OpenCloseContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  
   
  <OpenCloseContextProvider>
    <App />
  </OpenCloseContextProvider>
)
