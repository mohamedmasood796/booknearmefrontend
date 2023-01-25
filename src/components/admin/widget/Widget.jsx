import React from 'react'
import './widget.scss'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function Widget() {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">48374</span>
                <span className="link">see all user</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpRoundedIcon />
                    20%
                </div>
                <PersonRoundedIcon className='icon'/>
                 
            </div>
        </div>
    )
}

export default Widget 