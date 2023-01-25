import React from 'react'
import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchRoundedIcon />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneRoundedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <NotificationsNoneRoundedIcon  className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
