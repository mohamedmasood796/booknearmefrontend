import React from 'react'
import { deleteCity, deleteRoom } from '../../../api/adminReq'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

const CityList = ({citydata}) => {
const navigate=useNavigate()
    const deleteRoomById=async(id)=>{
      try {
            
        const response = await deleteCity(id)
      } catch (error) {
          navigate("/newhot")
      }
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
        <>
            <li className="table-row">
                <img src={citydata.imageUrl} alt="city image" width={60} />
                <div className="col col-1" data-label="Job Id">{citydata.name}</div>
                <div className="blockButton" onClick={()=>submit(citydata._id)}   >Delete</div>
            </li>

        </>
    )
}

export default CityList
