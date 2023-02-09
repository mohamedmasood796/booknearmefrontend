import React, { useState } from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import { useNavigate } from "react-router-dom"

function Roomlist({ room }) {

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
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">{room.title}</div>
                <div className="col col-4" data-label="Payment Status">{room.price}</div>
                <div className="col col-2" data-label="Customer Name">{room.maxPeople}</div>
                <div className="col col-3" data-label="Amount">{room.desc}</div>
                {/* <div className="col col-3" data-label="Amount">{room.cheapestPrice}</div> */}


                {/* <div className="unblockButton" onClick={() => addRoom(hotel._id)} >Add Room</div> */}
                <div className="blockButton"  >Delete</div>

            </li>
        </div>
    )
}

export default Roomlist
