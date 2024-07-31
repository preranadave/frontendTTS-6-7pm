import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
//portfolio users panel modules 
import Layout from './components/Layout';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Account from './components/Account';
import PageNotFound from './components/PageNotFound';
//portfolio admin panel modules 
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ManageCustomer from './components/admin/ManageCustomer';
import AddPortfolio from './components/admin/AddPortfolio';
import AddAbstract from './components/admin/AddAbstract';
import AddSkills from './components/admin/AddSkills';
import AddClient from './components/admin/AddClient';
import ManageContacts from './components/admin/ManageContacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Layout />*/}
    <BrowserRouter>
    <Routes>

   {/*<User panel Routing />*/}
    <Route path='/' index element={<Layout />} />
    <Route path='/about-us' element={<About />} />
    <Route path='/our-services' element={<Services />} />
    <Route path='/contact-with-us' element={<Contact />} />
    <Route path='/create-account' element={<Account />} />
    <Route path='/*' element={<PageNotFound />} />
   {/*<Admin panel Routing />*/}
   <Route path='/admin-login' element={<AdminLogin />} />
   <Route path='/admin-login/admin-dashboard' element={<AdminLayout />} />
   <Route path='/admin-login/manage-customer' element={<ManageCustomer />} />
   <Route path='/admin-login/add-portfolio' element={<AddPortfolio />} />
   <Route path='/admin-login/add-abstract' element={<AddAbstract />} />
   <Route path='/admin-login/add-skills' element={<AddSkills />} />
   <Route path='/admin-login/add-clients' element={<AddClient />} />
   <Route path='/admin-login/manage-contacts' element={<ManageContacts />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals