import React from 'react'
import './login.css'

function Login() {
  return (
    <div>
      <form className='box' method='post' action="">
            <h1>Login</h1>
            <input type="text" className='loginname' name='name' placeholder='Username' />       
            <input type="password" name='password' placeholder='Password' />       
            <input type="submit" name='' value="Login" />       
        </form>
    </div>
  )
}

export default Login
