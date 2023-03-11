import React from 'react'
import Header from '../../components/user/header/Header'
import Logincomponents from '../../components/user/login/Login'
import Navbar from '../../components/user/navbar/Navbar'

function Login() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Logincomponents />
    </div>
  )
}

export default Login
