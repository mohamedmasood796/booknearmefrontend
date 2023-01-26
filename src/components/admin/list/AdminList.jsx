import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import Navbar from '../navbar/Navbar'
import Users from '../users/Users'
import "./list.scss"

function AdminList() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Users/>
      </div>   
    </div>
  )
}

export default AdminList
