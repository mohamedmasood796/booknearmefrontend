
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
        setSubmit(true)
        if (username && password) {
            const { data } = await loginUser({ username, password })
            if (data.status) {
                dispatch(loginSuccess(data))
                localStorage.setItem("user", data.username)
                localStorage.setItem("jwt", data.token)

                navigate('/')
            } else {
                setErrMess(data.message)
            }
        }
    }

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