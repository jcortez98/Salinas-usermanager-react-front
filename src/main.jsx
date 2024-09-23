import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { UserManagerApp } from './components/UserManagerApp'
import './output.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserManagerApp />
  </BrowserRouter>,
)
