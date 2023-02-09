import React, { useState } from 'react'
import {  blockUser } from '../../../api/adminReq';

function Userlist({user}) {
    const [isBlock,setIsBlock]=useState(user.isBlock)

    const Blockuser=async(e)=>{
        setIsBlock(false)
        await blockUser({ Status: false,e});
    }
    const unBlockuser=async (e)=>{
        setIsBlock(true)
        await blockUser({ Status: true,e });

    }
    return (
        <div>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">{user.username}</div>
                <div className="col col-4" data-label="Payment Status">{user.email}</div>
                <div className="col col-2" data-label="Customer Name">{user.country}</div>
                <div className="col col-3" data-label="Amount">{user.phone}</div>


                {isBlock ? <div className="unblockButton" onClick={()=>Blockuser(user._id)} >Unblock</div> :
                    <div className="blockButton" onClick={()=>unBlockuser(user._id)} >Block</div>}

            </li>
        </div>
    )
}

export default Userlist
