import React, { useState } from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import { useNavigate } from "react-router-dom"
import { deleteRoom } from '../../../api/adminReq';

function Roomlist({ room ,hotelid}) {

    const navigate = useNavigate();
    console.log(hotelid,"hai this is params in readt thats all thansAAAAAAAAAAAAA")
    console.log(room,"hai this is params in readt thats all thans")
    
    // const addRoom = (e) => {
    //     console.log(e, "userid and hotel id")
    //     navigate(`/admin/addRoom/${e}`)
    // }
    const deleteRoomById=async(id)=>{
        console.log(id,"hai this is room id thats all ")
        const response = await deleteRoom(id,hotelid)
    }
    return (
        <div>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">{room.roomId?.title}</div>
                <div className="col col-4" data-label="Payment Status">{room.roomId?.price}</div>
                <div className="col col-2" data-label="Customer Name">{room.roomId?.maxPeople}</div>
                <div className="col col-3" data-label="Amount">{room.roomId?.desc}</div>
                {/* <div className="col col-3" data-label="Amount">{room.cheapestPrice}</div> */}


                {/* <div className="unblockButton" onClick={() => addRoom(hotel._id)} >Add Room</div> */}
                <div className="blockButton" onClick={()=>deleteRoomById(room?.roomId._id)}  >Delete</div>

            </li>
        </div>
    )
}

export default Roomlist
