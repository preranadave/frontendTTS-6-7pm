import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Register from './Components/customer/Register.jsx'
import Products from './Components/customer/Products.jsx'
import Pricing  from './Components/customer/Pricing.jsx'
import Blogs from './Components/customer/Blogs.jsx'
import AboutUs from './Components/customer/About.jsx'
import Layout from './Layout.jsx'
import PageNotFound from './Components/customer/PageNotFound.jsx'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout></Layout>}></Route>
        
        <Route path='/Register' element={<Register></Register>}></Route>
        
        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Layout /> */}
  </React.StrictMode>,
)
