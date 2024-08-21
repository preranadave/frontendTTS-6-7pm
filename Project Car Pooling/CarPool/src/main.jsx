import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route,BrowserRouter, Routes } from 'react-router-dom'

//User Components
import UserHomePage from './Components/User/UserHomePage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<UserHomePage></UserHomePage>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
