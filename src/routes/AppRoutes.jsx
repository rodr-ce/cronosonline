import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import Login from '../components/Login/Login'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  )
}

export default AppRoutes