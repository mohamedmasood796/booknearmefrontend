import React, { useEffect, useState } from 'react'
import './widget.scss'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import { getFullData } from '../../../api/adminReq';
import { Link, useNavigate } from 'react-router-dom';

function Widget() {
    const navigate=useNavigate()
    const [cardData, setCardData] = useState({})
    // let data;

    // switch (type) {
    //     case "user":
    //         data = {
    //             title: "USERS",
    //             isMoney: false,
    //             link: "see all users",
    //             icon: (
    //                 <PersonRoundedIcon className='icon' />

    //             )
    //         }
    //         break;
    //     case "order":
    //         data = {
    //             title: "ORDERS",
    //             isMoney: false,
    //             link: "view all orders",
    //             icon: (
    //                 <ShoppingCartRoundedIcon className='icon' />

    //             )
    //         }
    //         break;
    //     case "earning":
    //         data = {
    //             title: "ERARNINGS",
    //             isMoney: true,
    //             link: "View net earnings",
    //             icon: (
    //                 <CurrencyRupeeRoundedIcon  className='icon' />

    //             )
    //         }
    //         break;
    //     case "profit":
    //         data = {
    //             title: "PROFIT",
    //             isMoney: true,
    //             link: "see details",
    //             icon: (
    //                 <HomeRepairServiceRoundedIcon className='icon' />

    //             )
    //         }
    //         break;
    //     default:
    //         break;
    // }

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await getFullData()
                setCardData(data)
            }
            catch (error) {
                navigate("/newhot")
            }
        }
        getData()
    }, [])
    console.log(cardData, "LLLLLLLLL")

    return (
        <>
            <div className="widget">
                <div className="left">
                    <span className="title">USERS</span>
                    <span className="counter">{cardData?.allUsers}</span>
                </div>
                <div className="right">
                    <PersonRoundedIcon className='icon' />

                    <div className="percentage positive">
                        <Link to="/admin/users">
                            <span className="link">see all user</span>
                        </Link>
                        {/* <KeyboardArrowUpRoundedIcon />
                        20% */}
                    </div>

                </div>
            </div>
            <div className="widget">
                <div className="left">
                    <span className="title">ORDERS</span>
                    <span className="counter">{cardData?.allOrder}</span>
                </div>
                <div className="right">
                    <ShoppingCartRoundedIcon className='icon' />
                    <div className="percentage positive">
                        {/* <KeyboardArrowUpRoundedIcon />
                        20% */}
                        <Link to="/admin/BookingManagement">
                            <span className="link">see all orders</span>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="widget">
                <div className="left">
                    <span className="title">ERARNINGS</span>
                    <span className="counter">{cardData?.sales}</span>
                </div>
                <div className="right">
                    <CurrencyRupeeRoundedIcon className='icon' />
                    <div className="percentage positive">
                        <Link to="/admin/BookingManagement">
                            <span className="link">see all earnings</span>
                        </Link>
                        {/* <KeyboardArrowUpRoundedIcon />
                        20% */}
                    </div>

                </div>
            </div>
            <div className="widget">
                <div className="left">
                    <span className="title">HOTELS</span>
                    <span className="counter">{cardData?.allHotels}</span>
                </div>
                <div className="right">
                    <HomeRepairServiceRoundedIcon className='icon' />
                    <div className="percentage positive">
                        <Link to="/admin/hotels">
                            <span className="link">see all hotels</span>
                        </Link>
                        {/* <KeyboardArrowUpRoundedIcon />
                        20% */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Widget 