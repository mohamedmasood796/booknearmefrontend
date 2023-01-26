import React from 'react'
import './widget.scss'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';

function Widget({ type }) {
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: (
                    <PersonRoundedIcon className='icon' />

                )
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "view all orders",
                icon: (
                    <ShoppingCartRoundedIcon className='icon' />

                )
            }
            break;
        case "earning":
            data = {
                title: "ERARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <CurrencyRupeeRoundedIcon  className='icon' />

                )
            }
            break;
        case "profit":
            data = {
                title: "PROFIT",
                isMoney: true,
                link: "see details",
                icon: (
                    <HomeRepairServiceRoundedIcon className='icon' />

                )
            }
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">48374</span>
                <span className="link">see all user</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpRoundedIcon />
                    20%
                </div>
                <PersonRoundedIcon className='icon' />

            </div>
        </div>
    )
}

export default Widget 