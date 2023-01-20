import React from 'react'
import Header from '../../components/user/header/Header'
import HotelPage from '../../components/user/hotelpage/HotelPage'
import Navbar from '../../components/user/navbar/Navbar'

function Hotel() {
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <HotelPage/>
    </div>
  )
}

export default Hotel
