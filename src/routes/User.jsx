import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../page/userPage/List'
import Home from '../page/userPage/Home'
import Hotel from '../page/userPage/Hotel'
import Signup from '../page/userPage/Signup'
import Login from '../page/userPage/Login'
import Verifypage from '../components/user/verifypage/Verifypage'
import CheckoutPage from '../page/userPage/CheckoutPage'
import Success from '../components/user/result/Success'
import Cancel from '../components/user/result/Cancel'
import Notfound from '../components/user/notfound/Notfound'

function User() {
  return (
    <>
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/hotels' element={<List />} />
        <Route exact path='/hotels/:id' element={<Hotel />} />
        <Route exact path='/verify' element={<Verifypage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default User