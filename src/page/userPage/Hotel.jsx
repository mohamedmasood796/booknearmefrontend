import React from 'react'
import Banner from '../../components/admin/banner/Banner'
import Header from '../../components/user/header/Header'
import HotelPage from '../../components/user/hotelpage/HotelPage'
import Navbar from '../../components/user/navbar/Navbar'

function Hotel() {
  return (
    <>
      <Navbar/>
      <Header type='list'/>
      <HotelPage/>
      <Banner/>

    </>
  )
}

export default Hotel
