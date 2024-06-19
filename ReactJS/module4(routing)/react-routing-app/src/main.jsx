import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import Layout from './Layout'
import Home from './Home'
import AboutUS from './AboutUs'
import OurSevices from './OurServices'
import Gallary from './Gallary'
import PageNotFound from './PageNotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='/about-us' element={<AboutUS />}></Route>
          <Route path='/our-services' element={<OurSevices />}></Route>
          <Route path='/gallary' element={<Gallary />}></Route>
          <Route path='*' element={<PageNotFound />} />


        </Route>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode >
)
