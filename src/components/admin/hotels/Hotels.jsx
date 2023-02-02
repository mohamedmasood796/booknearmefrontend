import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import Navbar from '../navbar/Navbar'
import "./hotels.scss"
import HotelList from '../hotelList/HotelList'

function Hotels() {
  return (
    <div className='home'>
    <Sidebar />
    <div className="homeContainer">
      <Navbar/>
      <div className="">
       <HotelList/>
      </div>
    </div>
  </div>
  )
}

export default Hotels
