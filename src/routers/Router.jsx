import React from 'react'
import ProductList from '../pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import ProductAdd from '../pages/ProductAdd'
import SingUp from '../pages/SingUp'


export default function
    () {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route exact path="/products" element={<ProductList />}></Route>
                <Route path="/products/:name" element={<ProductDetail />}></Route>
                <Route path="/cart" element={<CartDetail />}></Route>
                <Route path="/product/add" element={<ProductAdd />}></Route>
                <Route path="/signUp" element={<SingUp />}></Route>
            </Routes>
        </div>
    )
}
