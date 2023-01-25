import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminhomepage from '../page/adminPages/Adminhomepage'


function Admin() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Adminhomepage />} />

            </Routes>
        </>
    )
}

export default Admin
