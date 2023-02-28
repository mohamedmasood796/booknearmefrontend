import React from 'react'
import Header from '../../components/user/header/Header'
import Navbar from '../../components/user/navbar/Navbar'
import Profile from '../../components/user/userProfile/Profile'

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Header type="list" />
      

          <Profile />
    </>
  )
}

export default ProfilePage
