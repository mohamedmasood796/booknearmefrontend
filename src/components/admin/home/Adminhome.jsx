import React from 'react'
import "./home.scss"
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Widget from '../widget/Widget'
import Payment from '../chart/Payment'
import Bookings from '../chart/Bookings'

function Adminhome() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="erarning" />
          <Widget type="profit" />
        </div> */}

        <div className='chart'>
          <Payment />
          <Bookings />
        </div>
      </div>
    </div>
  )
}

export default Adminhome
