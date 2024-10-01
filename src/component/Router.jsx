import React from 'react'
import Home1 from './home1/Home1'
import {Route,Routes}from 'react-router-dom';
import Login from './login/Login';
import Redg from './register/Redg';
import Test from './Test.jsx/Test';
import AvailableProduct from './AvailableProduct/AvailableProduct';
import AddEditAdmin from './addEditAdmin/AddEditAdmin';
import DashboardAdmin from './adminpage/DashboardAdmin';
const Router=()=> {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/shoping/signin' element={<Login/>}/>
        <Route path='/shoping/signup' element={<Redg/>}/>
        <Route path='/shop/products' element={<AvailableProduct/>}/>
        <Route path='/shop/edit' element={<AddEditAdmin/>}/>
        <Route path='/shop/dashboard' element={<DashboardAdmin/>}/>
    </Routes>
{/* <Test/> */}
    
      
    </>
  )
}

export default Router
