

import { useState, useEffect } from 'react'
import React from 'react'
import { getAllUserAPI, blockUser } from '../../../api/adminReq';

import "./users.scss"
import Userlist from '../tableList/Userlist';


function Users() {

    const [usersData, setUsersData] = useState([])

    const myFuc = async () => {
        const { data } = await getAllUserAPI()
        setUsersData(data)

    }
    useEffect(() => {
        myFuc()
    }, [])



    return (
        <div>
            <div class="container">
                <h2>User List</h2>
                <ul className="responsive-table">

                    <li class="table-header">
                        <div className="usercol1 col col-1">Name</div>
                        <div className="usercol2 col col-2">Email</div>
                        {/* <div className="usercol3 col col-3">Country</div>
                        <div className="usercol4 col col-4">Phone</div> */}
                        <div className="usercol5 col col-4">status</div>
                    </li>
                    


                    {usersData.map((user) => (
                        <Userlist user={user}/>
                    ))}

                   
                </ul>
            </div>

        </div>
    )
}

export default Users