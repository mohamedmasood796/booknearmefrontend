import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../page/adminPages/AddProduct'
import AddRoomPage from '../page/adminPages/AddRoomPage'
import Adminhomepage from '../page/adminPages/Adminhomepage'
import AdminLogin from '../page/adminPages/AdminLogin'
import HotelsPage from '../page/adminPages/HotelsPage'
import User from '../page/adminPages/User'

function Admin() {
    return (
        <>
            <Routes>
                <Route exact path='/login' element={<AdminLogin/>} />
                <Route exact path='/' element={<Adminhomepage />} />
                <Route exact path='/users' element={<User/>} />
                <Route exact path='/addhotels' element={<AddProduct/>} />
                <Route exact path='/hotels' element={<HotelsPage/>} />
                <Route exact path='/addRoom/:id' element={<AddRoomPage/>} />

            </Routes>
        </>
    )
}

export default Admin
