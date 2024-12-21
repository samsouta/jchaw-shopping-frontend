import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import RouteGuard from './RouteGard'
import Shop from '../pages/Shop'
import ShopDetail from '../pages/ShopDetail'
import ShopCategory from '../pages/ShopCategory'
import Contact from '../pages/Contact'
import About from '../pages/About'



const Index: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RouteGuard><Dashboard/></RouteGuard>} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ShopDetail/>} /> 
        <Route path='/category/:type' element={<ShopCategory/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/about' element={<About/>} /> 
      </Routes>
    </div>
  )
}

export default Index