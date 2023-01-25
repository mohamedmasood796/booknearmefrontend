import React from 'react'
import "./home.scss"
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Widget from '../widget/Widget'

function Adminhome() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Adminhome
