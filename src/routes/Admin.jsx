import React from 'react'
import { Route, Routes } from 'react-router-dom'
import City from '../components/admin/city/City'
import AdminProtectedRouter from '../components/admin/PRouters/AdminProtectRoute'
import PublicRoute from '../components/admin/PRouters/PublicRoute'
import AddProduct from '../page/adminPages/AddProduct'
import AddRoomPage from '../page/adminPages/AddRoomPage'
import Adminhomepage from '../page/adminPages/Adminhomepage'
import AdminLogin from '../page/adminPages/AdminLogin'
import BookingMgtPage from '../page/adminPages/BookingMgtPage'
import HotelsPage from '../page/adminPages/HotelsPage'
import User from '../page/adminPages/User'
import EditHotel from '../components/admin/editHotel/EditHotel'

function Admin() {
    return (
        <>
            <Routes>

                <Route exact path='/login' element={
                    <PublicRoute>
                        <AdminLogin />
                    </PublicRoute>
                } />

                <Route exact path='/' element={
                    <AdminProtectedRouter>
                        <Adminhomepage />
                    </AdminProtectedRouter>
                } />

                <Route exact path='/users' element={
                    <AdminProtectedRouter>
                        <User />
                    </AdminProtectedRouter>
                } />

                <Route exact path='/BookingManagement' element={
                    <AdminProtectedRouter>
                        <BookingMgtPage />
                    </AdminProtectedRouter>
                } />

                <Route exact path='/city' element={
                    <AdminProtectedRouter>
                        <City />
                    </AdminProtectedRouter>
                } />

                <Route exact path='/addhotels' element={
                    <AdminProtectedRouter>
                    <AddProduct />
                </AdminProtectedRouter>
                } />

                <Route exact path='/hotels' element={
                    <AdminProtectedRouter>
                        <HotelsPage />
                    </AdminProtectedRouter>
                } />

                <Route exact path='/addRoom/:id' element={
                    <AdminProtectedRouter>
                        <AddRoomPage />
                    </AdminProtectedRouter>
                } />
                
                <Route exact path='/editHotel/:id' element={
                    <AdminProtectedRouter>
                        <EditHotel />
                    </AdminProtectedRouter>
                } />



            </Routes>
        </>
    )
}

export default Admin
