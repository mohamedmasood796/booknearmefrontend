import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import Navbar from '../navbar/Navbar'
import Users from '../users/Users'
import "./list.scss"

function AdminList() {
  return (
    <div className='home'>
    <Sidebar />
    <div className="homeContainer">
      <Navbar/>
      <div className="">
       <Users/>
      </div>
    </div>
  </div>
  )
}

export default AdminList
