import React from 'react'

function Login() {
  return (
    <div className="login">
    <div className="lContainer border flex justify-center items-center h-screen">
        <div className='tdiv grid items-center gap-5 border py-10 px-10'>
        <h1 className='	font-weight: 400; text-4xl ml-3'>Login</h1>
            <input type="text" placeholder='username' id='username'  className="border my-2 mx-3 outline rounded-lg outline-gray-300  lInput" name='username' />
            <input type="password" placeholder='password' id='password'  className="border my-2 mx-3 outline rounded-lg outline-gray-300  lInput" name='password' />
            <button  className="lButton">Login</button>
            {/* {errMess ? <small className='text-red-600 text-xl'>{errMess}</small>:null} */}
        </div>
    </div>
</div>
  )
}

export default Login