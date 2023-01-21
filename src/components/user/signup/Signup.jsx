import React from 'react'
import "./signup.css"

function Signup() {
  return (
    <div>
        <form className='box' method='post' action="">
            <h1>Signup</h1>
            
            <input type="text" className='userinupt' name='name' placeholder='Username' />       
            <input type="email" name='email' placeholder='Email' />       
            <input type="password" name='password' placeholder='Password' />       
            <input type="password" name='password' placeholder='confirm Password' />       
            <input type="submit" name='' value="Signup" />       
        </form>
    </div>
  )
}

export default Signup