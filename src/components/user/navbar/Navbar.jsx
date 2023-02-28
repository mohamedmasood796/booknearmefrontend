import React from 'react'
import "./navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


function Navbar() {
    const [open, setOpen] = useState(false)
    const user = useSelector((state) => state.userAuth)



    console.log("user2345t", user)
    const userlocal = localStorage.getItem("user")//local store 
    return (
        <div className='navbar h-12  bg-[#003580] flex justify-center'>
            <div className="navContainer w-full container text-white flex items-center justify-between">
                <Link to='/'>
                    <div className="logo  font-medium">BookNearMe</div>
                </Link>
                <div className="navItems flex ">
                    {/* <button className="hidden md:block py-1 px-4 border-2 border-white text-white">List Your Property</button> */}

                    {userlocal ?
                        <Link to='/profile'>
                            <p className="">{userlocal}</p>
                        </Link>

                        : (<>
                            <Link to='/signup'>
                                <button className="navButton hidden md:block ml-5 py-1 px-4 bg-white text-blue-700 cursor-pointer">Register</button>
                            </Link>
                            <Link to='/login'>
                                <button className="navButton hidden md:block ml-5 py-1 px-4 bg-white text-blue-700 cursor-pointer">Login</button>
                            </Link>
                        </>)}
                    <div className="md:hidden z-50   text-gray-600  cursor-pointer text-3xl" onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                </div>
            </div>
            {
                open ? <div className="fixed w-full border bg-white  px-5">
                    <div className="py-10 font-extrabold text-xl">
                        <h1>More</h1>
                    </div>
                    <div className="flex gap-2">
                        <p>inr</p>
                        <p>indian rupee</p>
                    </div>
                    <div className="font-bold py-3 grid gap-4">
                        <p>English</p>
                        <p>English</p>
                        <p>English</p>
                        <p>English</p>
                        <p>English</p>
                    </div>
                </div> : null
            }
        </div >
    )
}

export default Navbar