// // import React from 'react'
// // import './login.css'

// // function Login() {
// //   return (
// //     <div>
// //       <form className='box' method='post' action="">
// //             <h1>Login</h1>
// //             <input type="text" className='loginname' name='name' placeholder='Username' />       
// //             <input type="password" name='password' placeholder='Password' />       
// //             <input type="submit" name='' value="Login" />       
// //         </form>
// //     </div>
// //   )
// // }

// // export default Login
//==============================================================================================================

// import React, { useState } from 'react'
// import {useSelector} from "react-redux"
// import { userActions } from '../../../redux/Authuser'
// import {useDispatch} from "react-redux"

// import './login.css'
// import axios from 'axios'

// function Login() {
//   const dispatch=useDispatch()
//   const [credentials,setCredentials]=useState({
//     username:undefined,
//     password:undefined
//   })


//   const Authdata=useSelector((state)=>state.userAuth)
//   console.log("authhhhhhhhhhh",Authdata)

//   const handleChange=(e)=>{
//     setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
//   }

//   const handleClick=async e=>{
//     e.preventDefault()
//     // dispatch(userActions.loginStart())


//     try{
//       const res=await axios.get('http://localhost:5000/api/auth/login',credentials)
//       console.log('rrrrrrrrrrressssssssssssssss',res)
//       dispatch(userActions.loginSuccess({actions:res.data}))
//     }catch(err){
//       dispatch(userActions.loginFailure({actions:err}))
//     }

//   }


//   return (
//     <div className='login'>
//       <div className="lContainer">
// <input type="text" placeholder='username' id='username' onChange={handleChange} className="lInput" />
// <input type="password" placeholder='password' id='password' onChange={handleChange} className="lInput" />
// <button onClick={handleClick} className="lButton">Login</button>
//         {/* {error && <span>{error.message}</span>} */}
//       </div>

//     </div>
//   )
// }

// export default Login

//==============================================================================================================================

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../api/authReq'
import { useDispatch } from "react-redux"
import { loginSuccess } from '../../../redux/Authuser'
import './login.css'


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMess, setErrMess] = useState('')
    const [submit, setSubmit] = useState(false)

    const usernameOnchage = (e) => {
        setUsername(e.target.value)
    }

    const userpasswordOnchage = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("hai hamras")
        setSubmit(true)
        if (username && password) {
            const { data } = await loginUser({ username, password })
            console.log(data, 998)
            if (data.status) {
                console.log("first");
                console.log(data)
                dispatch(loginSuccess(data))
                console.log("seo");
                localStorage.setItem("user", data.username)
                localStorage.setItem("jwt", data.token)

                navigate('/')
            } else {
                console.log(data.message, " 099");
                setErrMess(data.message)
                console.log("error")
            }
        }
    }
    console.log(errMess, 'jjjj');

    return (
        <div className="login">
            <div className="lContainer border flex justify-center items-center h-screen">
                <div className='grid items-center gap-5 border py-10 px-10'>
                    <h1 className='	font-weight: 400; text-4xl ml-3'>Login</h1>
                    {errMess ? <small className='text-red-600 text-xl'>{errMess}</small> : null}
                    <input type="text" placeholder='username' id='username' onChange={usernameOnchage} className="border my-2 mx-3 outline rounded-lg outline-gray-300  lInput" name='username' />
                    {!username && submit ? <p className='font-normal text-sm text-red-600 ml-4 '> please enter and name</p> : null}

                    <input type="password" placeholder='password' id='password' onChange={userpasswordOnchage} className="border my-2 mx-3 outline rounded-lg outline-gray-300  lInput" name='password' />
                    {!password && submit ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter password</p> : null}

                    <button onClick={handleLogin} className="lButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login