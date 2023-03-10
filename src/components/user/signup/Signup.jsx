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
import validator from 'validator'
import { registerUser } from '../../../api/authReq'
import './signup.css'

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [existError, setExistError] = useState('')
  const [msg, setMsg] = useState('')
  const [submit,setSubmit] = useState(false)
  const [isUserName, setIsUserName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [emailMessage,setEmailMessage] = useState(false)
  const emailOnChange = (e) => {
    setEmail(e.target.value)
    setIsEmail(validator.isEmail(email))
  }
  const usernameOnChange = (e) => {
    setUsername(e.target.value)
    setIsUserName(username.length > 1)
  }
  const passwordOnChange = (e) => {
    setPassword(e.target.value)
    setIsPassword(validator.isStrongPassword(password, {
      minLength: 6, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    }))
  }
  const handleSignup = async (e) => {
    e.preventDefault()
    setSubmit(true)
    if (isEmail && isPassword && isUserName) {
      const { data } = await registerUser({ username, email, password })
      if (data.status) {

      setEmailMessage(true)
        setMsg(data.message)
      } else {
        setExistError(data.message)
      }
    }
  }

  return (
    <div className='signup'>
      <div className="sContainer  border flex justify-center items-center h-screen">
        <div className='grid items-center gap-2 border py-10  px-10 '>
          {existError && <p className='text-red-600 text'>{existError}</p>}
          {msg && <p className='text-green-600 text'>{msg}</p>}
          <h1 className='	font-weight: 400; text-4xl ml-3'>Signup</h1>
          <input type="text" onChange={usernameOnChange} className='userinupt sInput border mx-3 outline rounded-lg outline-gray-300' name='username' placeholder='Username' />
          {username && !isUserName ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter correct name</p> : null}
          {!username && submit ? <p className='font-normal text-sm text-red-600 ml-4 '> please enter and name</p> : null}
          <input type="email" onChange={emailOnChange} name='email' placeholder='Email' className='sInput border my-2 mx-3 outline rounded-lg outline-gray-300' />
          {email && !isEmail ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter correct email</p> : null}
          {!email && submit ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter correct email</p> : null}
          <input type="password" onChange={passwordOnChange} name='password' placeholder='Password' className='sInput border my-2 mx-3 outline rounded-lg outline-gray-300' />
          {password && !isPassword ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter a strong password</p> : null}
          {!password && submit ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter a strong password</p> : null}
          <button className='sButton' onClick={handleSignup} type='submit' >Signup</button>
          {emailMessage && <small>please verify your accout </small>}
        </div>
      </div>
    </div>
  )
}

export default Signup
