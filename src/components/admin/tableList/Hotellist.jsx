import React, { useState } from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import { useNavigate } from "react-router-dom"
import { deleteHotel } from '../../../api/adminReq';
import './userlist.scss'


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
    const deleteRoombyid =async(id)=>{
        console.log(id,"it is hotel id")
        const response = await deleteHotel(id)
    }
    return (
        <div>
            <li className="table-row">
                <div className="hotelcol1 col col-1" data-label="Job Id">{hotel.name}</div>
                <div className="hotelcol2 col col-4" data-label="Payment Status">{hotel.type}</div>
                <div className="hotelcol3 col col-2" data-label="Customer Name">{hotel.address}</div>
                <div className="hotelcol4 col col-3" data-label="Amount">{hotel.desc}</div>
                <div className="hotelcol5 col col-3" data-label="Amount">{hotel.cheapestPrice}</div>

<div className="p-3 items-center">

                <div className="h-10 w-36 hotelcol6 unblockButton" onClick={() => addRoom(hotel._id)} >Add Room</div>
</div>
<div className="p-3">
    
                <div className="h-10  blockButton" onClick={()=>deleteRoombyid(hotel._id)} >Delete</div>
    </div>

            </li>
        </div>
    )
}

export default Hotellist
