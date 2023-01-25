// import React from 'react'
// import "./signup.css"

// function Signup() {
//   return (
//     <div>
//         <form className='box' method='post' action="">
//             <h1>Signup</h1>

// <input type="text" className='userinupt' name='name' placeholder='Username' />       
// <input type="email" name='email' placeholder='Email' />       
// <input type="password" name='password' placeholder='Password' />       
// <input type="password" name='password' placeholder='confirm Password' />       
// <input type="submit" name='' value="Signup" />       
//         </form>
//     </div>
//   )
// }

// export default Signup


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../../api/authReq'

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [existError, setExistError] = useState('')
  const emailOnChange = (e)=>{
    setEmail(e.target.value)
  }
  const usernameOnChange =(e) =>{
    setUsername(e.target.value)
  }
  const passwordOnChange =(e) =>{
    setPassword(e.target.value)
  }
  const handleSignup = async (e)=>{
    e.preventDefault()
    console.log('hello');
    const {data} = await registerUser({username,email,password})
    console.log(data);
    if(data === 'User has been created'){
      navigate('/')
    }else if(data.userExist){
      setExistError(data.message)
      console.log('errorr');
    }
  }
  return (
    <div>
      <input type="text" onChange={usernameOnChange} className='userinupt' name='username' placeholder='Username' />
      <input type="email" onChange={emailOnChange} name='email' placeholder='Email' />
      {existError&& <p className='text-red-600 text-6xl'>{existError}</p>}
      <input type="password" onChange={passwordOnChange} name='password' placeholder='Password' />
      <button onClick={handleSignup} type='submit' >Signup</button>
    </div>
  )
}

export default Signup
