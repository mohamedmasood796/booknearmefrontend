import React, { useState } from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import { useNavigate } from "react-router-dom"

function Hotellist({ hotel }) {

    const navigate = useNavigate();
    // const [isBlock,setIsBlock]=useState(user.isBlock)

    // const Blockuser=async(e)=>{
    //     setIsBlock(false)
    //     await blockUser({ Status: false,e});
    // }
    const addRoom = (e) => {
        console.log(e, "userid and hotel id")
        navigate(`/admin/addRoom/${e}`)


    }
    return (
        <div>
            <li class="table-row">
                <div className="col col-1" data-label="Job Id">{hotel.name}</div>
                <div className="col col-4" data-label="Payment Status">{hotel.type}</div>
                <div className="col col-2" data-label="Customer Name">{hotel.address}</div>
                <div className="col col-3" data-label="Amount">{hotel.desc}</div>
                <div className="col col-3" data-label="Amount">{hotel.cheapestPrice}</div>


                <div className="unblockButton" onClick={() => addRoom(hotel._id)} >Add Room</div>
                <div className="blockButton"  >Delete</div>

            </li>
        </div>
    )
}

export default Hotellist
