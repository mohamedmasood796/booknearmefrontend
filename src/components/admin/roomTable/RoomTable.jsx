

import { useState, useEffect } from 'react'
import React from 'react'
import { getRoomAPI, blockUser } from '../../../api/adminReq';
import { useNavigate, useParams } from 'react-router-dom';
import "./roomTable.scss"

// import "./users.scss"
import Userlist from '../tableList/Userlist';
import Roomlist from '../tableList/Roomlist';


function RoomTable() {
    const navigate=useNavigate()
    const [roomData, setRoomData] = useState([])
    const { id } = useParams()

    const myFuc = async () => {
        try {
            const { data } = await getRoomAPI(id)
            setRoomData(data.rooms)
        } catch (error) {
            navigate("/newhot")
        }
    }

    useEffect(() => {
        myFuc()
    }, [])



    return (
        <div>
            <div class="container">
                <h2>Room List</h2>
                <ul class="responsive-table">

                    <li class="table-header">
                        <div className="col col-1">Title</div>
                        <div className="col col-2">Price</div>
                        <div className="col col-3">maxPeople</div>
                        <div className="col col-4">Description</div>
                        <div className="col col-4">Action</div>
                    </li>


                    {roomData.length > 0 && roomData.map((room) => (
                        <Roomlist room={room} hotelid={id} />
                    ))}


                </ul>
            </div>

        </div>
    )
}

export default RoomTable