import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">BookNearMe</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <PersonIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2OutlinedIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <StorefrontOutlinedIcon className='icon'/>
                        <span>Booking</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    
                    <li>
                        <PersonOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                    
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar
