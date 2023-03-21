import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { registerUser } from "../../../api/authReq";
import "./signup.css";

function Signup() {
  // const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existError, setExistError] = useState("");
  const [msg, setMsg] = useState("");
  const [submit, setSubmit] = useState(false);
  const [isUserName, setIsUserName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);
  const emailOnChange = (e) => {
    setEmail(e.target.value);
    setIsEmail(validator.isEmail(email));
  };
  const usernameOnChange = (e) => {
    setUsername(e.target.value);
    setIsUserName(username.length > 1);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
    setIsPassword(
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    );
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (isEmail && isPassword && isUserName) {
      const { data } = await registerUser({ username, email, password });
      if (data.status) {
        setEmailMessage(true);
        setMsg(data.message);
      } else {
        setExistError(data.message);
      }
    }
  };

  return (
    <div className="min-h-screen py-40 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-9/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(https://digital.ihg.com/is/image/ihg/holiday-inn-hotel-and-suites-clearwater-beach-6477439006-4x3)`,
            }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                This is a new website for book the room for your own concern
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It's free and only take a minute
            </p>
            {existError && <p className="text-red-600 text">{existError}</p>}
            {msg && <p className="text-green-600 text">{msg}</p>}
            <form>
              <div className="mt-5">
                <input
                  onChange={usernameOnChange}
                  type="text"
                  name="firstName"
                  placeholder="Fullname"
                  className="border border-gray-400 py-1 px-2 w-full "
                />
                {/* <input onChange={handleChange} type="text" name="lastName" placeholder='Lastname' className='border border-gray-400 py-1 px-2' /> */}
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  {username && !isUserName ? (
                    <small className="text-red-500">
                      *Please enter first name
                    </small>
                  ) : null}
                  {!username && submit ? (
                    <small className="text-red-500">
                      Please enter a valid name
                    </small>
                  ) : null}
                </div>
                {/* <div>
                            {!signupData.lastName && submit ? <small className='text-red-500'>*Please enter last name</small> : null}
                            {!isLastName && signupData.lastName ? <small className=' text-red-500'>Please enter a valid name</small> : null}
                        </div> */}
              </div>
              <div className="mt-5">
                <input
                  onChange={emailOnChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div>
                {email && !isEmail ? (
                  <small className="text-red-500">*Please enter an email</small>
                ) : null}
                {!email && submit ? (
                  <small className="text-red-500">
                    Please enter a valid email
                  </small>
                ) : null}
              </div>
              <div className="mt-5">
                <input
                  onChange={passwordOnChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div>
                {password && !isPassword ? (
                  <small className="text-red-500">*Please enter password</small>
                ) : null}
                {!password && submit ? (
                  <small className="text-red-500">Make password stronger</small>
                ) : null}
              </div>
              {/* <div className='mt-5'>
                        <input onChange={handleChange} type="password" name="confirmPassword" placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full' />
                    </div>
                    <div>
                        {!signupData.confirmPassword && submit ? <small className='text-red-500'>*Please confirm password</small> : null}
                    </div> */}

              <div className="mt-5">
                <button
                  onClick={handleSignup}
                  className="w-full bg-gray-800 py-3 text-center text-white"
                >
                  Register Now
                </button>
              </div>
              {emailMessage && <small>please verify your accout </small>}
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className='signup'>
    //   <div className="sContainer  border flex justify-center items-center h-screen">
    //     <div className='grid items-center gap-2 border py-10  px-10 '>
    //       {existError && <p className='text-red-600 text'>{existError}</p>}
    //       {msg && <p className='text-green-600 text'>{msg}</p>}
    //       <h1 className='	font-weight: 400; text-4xl ml-3'>Signup</h1>
    //       <input type="text" onChange={usernameOnChange} className='userinupt sInput border mx-3 outline rounded-lg outline-gray-300' name='username' placeholder='Username' />
    //       {username && !isUserName ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter correct name</p> : null}
    //       {!username && submit ? <p className='font-normal text-sm text-red-600 ml-4 '> please enter and name</p> : null}
    //       <input type="email" onChange={emailOnChange} name='email' placeholder='Email' className='sInput border my-2 mx-3 outline rounded-lg outline-gray-300' />
    //       {email && !isEmail ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter correct email</p> : null}
    //       {!email && submit ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter correct email</p> : null}
    //       <input type="password" onChange={passwordOnChange} name='password' placeholder='Password' className='sInput border my-2 mx-3 outline rounded-lg outline-gray-300' />
    //       {password && !isPassword ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter a strong password</p> : null}
    //       {!password && submit ? <p className='font-normal text-sm text-red-600 ml-4 '>please enter a strong password</p> : null}
    //       <button className='sButton' onClick={handleSignup} type='submit' >Signup</button>
    //       {emailMessage && <small>please verify your accout </small>}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Signup;
