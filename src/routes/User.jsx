import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../page/userPage/List'
import Home from '../page/userPage/Home'
import Hotel from '../page/userPage/Hotel'

function User() {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/hotels' element={<List />} />
            <Route exact path='/hotelpage' element={<Hotel />} />
        </Routes>
    </>
  )
}

export default User