import React from 'react'
import Banner from '../../components/admin/banner/Banner'
import Header from '../../components/user/header/Header'
import HotelPage from '../../components/user/hotelpage/HotelPage'
import Navbar from '../../components/user/navbar/Navbar'
import { useState } from 'react'

function Hotel() {
  const [checkInglo, setCheckInglo] = useState([]);
  console.log(checkInglo,"checkIngolo00000000000000000")

  return (
    <>
      <Navbar/>
      <Header type='list'/>
      <HotelPage setCheckInglo={setCheckInglo}/>
      <Banner checkInglo={checkInglo}/>
      

    </>
  )
}

export default Hotel
