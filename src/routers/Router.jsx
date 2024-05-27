import React from 'react'
import ProductList from '../pages/ProductList'
import { Route, Routes, Navigate } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import ProductAdd from '../pages/ProductAdd'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import Dashboard from '../pages/Dashboard'

export default function
    () {
    return (
        <div>
            <Routes>
                {/* public routes */}
                <Route exact path="/" element={<LogIn />} />
                {/* private routes ADMIN*/}
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/products" element={<ProductList />}></Route>
                <Route path="/products/:name" element={<ProductDetail />}></Route>
                <Route path="/cart" element={<CartDetail />}></Route>
                <Route path="/product/add" element={<ProductAdd />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
            </Routes>
        </div>
    )
}
