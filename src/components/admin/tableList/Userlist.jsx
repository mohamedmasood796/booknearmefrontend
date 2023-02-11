import React, { useState } from 'react'
import {  blockUser } from '../../../api/adminReq';
import Modal from '../modal/Modal';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Userlist({user}) {
    const [isBlock,setIsBlock]=useState(user.isBlock)
    const [openModal,setOpenModal]=useState(false)

    const Blockuser=async(e)=>{
        setIsBlock(false)
        await blockUser({ Status: false,e});
    }
    const unBlockuser=async (e)=>{
        setIsBlock(true)
        await blockUser({ Status: true,e });

    }

    const submitBlockUser = async (e) => {
          await blockUser({ Status: true,e });
      };
      const submitUnblockUser = async (e) => {
          await blockUser({ Status: false,e});
        
      };

      const submit = (userId) => {
        confirmAlert({
          title: 'Confirm to ',
          message: 'Are you block your user.',
          buttons: [
            { 
              label: 'Yes',
              onClick: () => { submitBlockUser(userId)}
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
                <div className="col col-1" data-label="Job Id">{user.username}</div>
                <div className="col col-4" data-label="Payment Status">{user.email}</div>
                <div className="col col-2" data-label="Customer Name">{user.country}</div>
                <div className="col col-3" data-label="Amount">{user.phone}</div>


                {/* {isBlock ? <div className="unblockButton" onClick={()=>Blockuser(user._id)} >Unblock</div> :
                    <div className="blockButton" onClick={()=>unBlockuser(user._id)} >Block</div>} */}

                {isBlock ? <div className="unblockButton" onClick={() => {submitUnblockUser(user._id)}} >Unblock</div> :
                    <div className="blockButton" onClick={()=>submit(user._id)} >Block</div>}
            </li>
    
        </div>
    )
}

export default Userlist
