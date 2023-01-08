import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import ProductSingle from '../pages/ProductSingle'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import CategoryDetail from '../components/CategoryDetail'
const routers = () => {
  return (
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
        <Route path='/product' element = {<Product/>}></Route>
        <Route path='/product/:id' element = {<Product/>}></Route>
        <Route path='/productSingle' element = {<ProductSingle/>}></Route>
        <Route path='/category/:id' element ={<CategoryDetail/>}/>
      </Routes>
  )
}

export default routers