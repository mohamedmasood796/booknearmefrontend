import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../page/userPage/List'
import Home from '../page/userPage/Home'
import Hotel from '../page/userPage/Hotel'
import Signup from '../page/userPage/Signup'
import Login from '../page/userPage/Login'

function User() {
  return (
    <>
        <Routes>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/hotels' element={<List />} />
            <Route exact path='/hotels/:id' element={<Hotel />} />
        </Routes>
    </>
  )
}

export default User