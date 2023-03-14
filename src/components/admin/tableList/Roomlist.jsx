import React, { useState } from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import { useNavigate } from "react-router-dom"
import { deleteRoom } from '../../../api/adminReq';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Roomlist({ room ,hotelid}) {

    const navigate = useNavigate();
    console.log(room,hotelid,"its room")
    
  
    const deleteRoomById=async(id)=>{
        const response = await deleteRoom(id,hotelid)
        console.log(response,"respons")
    }
    const submit = (userId) => {
        confirmAlert({
          title: 'Confirm to ',
          message: 'Are you block your user.',
          buttons: [
            { 
              label: 'Yes',
              onClick: () => { deleteRoomById(userId)}
            },
            {
              label: 'No',
            }
          ]
        });
      };
    return (
        <div>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">{room.roomId?.title}</div>
                <div className="col col-4" data-label="Payment Status">{room.roomId?.price}</div>
                <div className="col col-2" data-label="Customer Name">{room.roomId?.maxPeople}</div>
                <div className="col col-3" data-label="Amount">{room.roomId?.desc}</div>
                {/* <div className="col col-3" data-label="Amount">{room.cheapestPrice}</div> */}


                
                {/* <div className="blockButton" onClick={()=>deleteRoomById(room?.roomId._id)}  >Delete</div> */}
                <div className="blockButton" onClick={()=>submit(room?.roomId._id)}  >Delete</div>

            </li>
        </div>
    )
}

export default Roomlist
