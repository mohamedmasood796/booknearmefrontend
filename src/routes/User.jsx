import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../page/userPage/List'
import Home from '../page/userPage/Home'
import Hotel from '../page/userPage/Hotel'
import Signup from '../page/userPage/Signup'
import Login from '../page/userPage/Login'
import Verifypage from '../components/user/verifypage/Verifypage'
import Success from '../components/user/result/Success'
import Cancel from '../components/user/result/Cancel'
import Notfound from '../components/user/notfound/Notfound'
import ProfilePage from '../page/userPage/ProfilePage'
import Addreview from '../components/user/review/Addreview'
import DisplayReview from '../components/user/displayReview/DisplayReview'
import UserPublicRoute from '../components/user/PRRouter/UserPublicRoute'
import UserProtectedRoute from '../components/user/PRRouter/UserProtectedRoute'


function User() {
  return (
    <>
      <Routes>

        <Route exact path='/signup' element={
          <UserPublicRoute>
            <Signup />
          </UserPublicRoute>

        } />

        <Route exact path='/login' element={
          <UserPublicRoute>

            <Login />
          </UserPublicRoute>

        } />

        <Route exact path='/' element={
          <UserPublicRoute>

            <Home />
          </UserPublicRoute>

        } />

        <Route exact path='/hotels' element={
          <UserPublicRoute>

            <List />
          </UserPublicRoute>

        } />

        <Route exact path='/newhotel' element={
           <UserProtectedRoute>

            <Hotel />
           </UserProtectedRoute>

        } />

        <Route exact path='/verify' element={
          <UserPublicRoute>
            <Verifypage />
          </UserPublicRoute>

        } />

        <Route exact path="/success" element={
          <UserProtectedRoute>

            <Success />
          </UserProtectedRoute>

        } />

        <Route exact path="/cancel" element={
          <UserProtectedRoute>

            <Cancel />
          </UserProtectedRoute>

        } />

        <Route exact path="/profile" element={
          <UserProtectedRoute>

            <ProfilePage />
          </UserProtectedRoute>

        } />

        <Route exact path="/addreview" element={
          <UserProtectedRoute>

            <Addreview />
          </UserProtectedRoute>

        } />

        <Route exact path="/displayReview" element={
          <UserPublicRoute>

            <DisplayReview />
          </UserPublicRoute>

        } />

        <Route exact path="*" element={
          <Notfound />
        } />
      </Routes>
    </>
  )
}

export default User