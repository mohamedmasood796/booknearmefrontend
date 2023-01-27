import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../page/adminPages/AddProduct'
import Adminhomepage from '../page/adminPages/Adminhomepage'
import User from '../page/adminPages/User'
import user from '../page/adminPages/User'

function Admin() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Adminhomepage />} />
                <Route exact path='/users' element={<User/>} />
                <Route exact path='/addProduct' element={<AddProduct/>} />

            </Routes>
        </>
    )
}

export default Admin
