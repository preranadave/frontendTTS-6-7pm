import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import App from '../src/App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout';
import Register from './components/Register';
import Login from './components/Login';
import AddEmployee from './components/AddEmployee';
import PageNotFound from './components/PageNotFound';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
const store = createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__())
render(
<Provider store = {store}>

<Router>
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-employee' element={<AddEmployee />} />
        
        <Route path='/employee-list' element={<EmployeeList />} />
        
        <Route path='/update-employee/:id' element={<UpdateEmployee />} />
        
        <Route path='/delete-employee/:id' element={<DeleteEmployee />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
</Router>
</Provider>, document.getElementById('root')
);