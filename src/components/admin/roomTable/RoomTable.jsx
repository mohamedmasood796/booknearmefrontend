

import { useState, useEffect } from 'react'
import React from 'react'
import { getRoomAPI, blockUser } from '../../../api/adminReq';
import { useParams } from 'react-router-dom';

// import "./users.scss"
import Userlist from '../tableList/Userlist';
import Roomlist from '../tableList/Roomlist';


function RoomTable() {

    const [roomData, setRoomData] = useState([])
    const {id} = useParams()
    const myFuc = async () => {
        console.log(id,"id");
        const { data } = await getRoomAPI(id)
        setRoomData(data)
        console.log(data, "datatablemasood")

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
                    </li>


                    {roomData.map((room) => (
                        <Roomlist room={room}/>
                    ))}

                   
                </ul>
            </div>

        </div>
    )
}

export default RoomTable