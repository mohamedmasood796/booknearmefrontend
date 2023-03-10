import React from 'react'


const CityList = ({citydata}) => {

    const deleteRoomById=async(id)=>{
        // const response = await deleteRoom()
    }

    return (
        <>
            <li className="table-row">
                <img src={citydata.imageUrl} alt="city image" width={60} />
                <div className="col col-1" data-label="Job Id">{citydata.name}</div>
                <div className="blockButton" onClick={() => deleteRoomById(citydata._id)}  >Delete</div>
            </li>

        </>
    )
}

export default CityList
