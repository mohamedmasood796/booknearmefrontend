// import React, { useState, useEffect } from 'react'
// import "./hotelList.scss"
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { hotelColumns, userRows } from '../datatablesource'
// import useFetch from '../../../hooks/useFetch';
// import { getAllHotelAPI } from '../../../api/adminReq';
// import { useNavigate } from "react-router-dom"

// const HotelList = () => {
//     const [usersData, setUsersData] = useState([])
//     const navigate = useNavigate();

//     // const togiveRoomid = async (hotelid) => {
//     //     console.log(hotelid,"block");
//     //     await blockUser({Status:true, userId});

//     // };

//     const myFuc = async () => {
//         const { data } = await getAllHotelAPI()
//         console.log(data, "12345678")
//         setUsersData(data)

//     }
//     useEffect(() => {
//         myFuc()
//         console.log("haidjd")
//     }, [])
//     const actionColumn = [
//         {
//             field: "action",
//             headerName: "Action",
//             width: 200,
//             renderCell: (params) => {
//                 const addRoom = (e) => {
//                     const currentRow = params.row;
//                     console.log(currentRow, "currentroom id")
//                     // togiveRoomid(currentRow._id)
//                     navigate(`/admin/addRoom/${currentRow._id}`)

//                 };
//                 return (
//                     <div className="cellAction">

//                         <div className="viewButton" onClick={addRoom}>Add Room</div>
//                         <div className="deleteButton">view Room</div>
//                         <div className="deleteButton">Delete</div>
//                     </div>
//                 )
//             }
//         }
//     ]



//     return (
//         <div className='datatable'>
//             <DataGrid
//                 rows={usersData}
//                 columns={hotelColumns.concat(actionColumn)}
//                 pageSize={9}
//                 rowsPerPageOptions={[9]}
//                 checkboxSelection
//                 getRowId={row => row._id}

//             />
//         </div>
//     )

// }

// export default HotelList


///////////////////////////////////////////////////




import { useState, useEffect } from 'react'
import React from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import "./hotelList.scss"
import Userlist from '../tableList/Userlist';
import Hotellist from '../tableList/Hotellist';


function HotelList() {

    const [hotelData, setHotelData] = useState([])

    const myFuc = async () => {
        const { data } = await getAllHotelAPI()
        setHotelData(data)
        console.log(data, "datatableT T")

    }
    useEffect(() => {
        myFuc()
    }, [])



    return (
        <div>
            <div className="container">
                <h2>HOTEL LIST </h2>
                <ul className="responsive-table">

                    <li className="table-header">
                        <div className="hotelcol1 col col-1">Hotel Name</div>
                        <div className="hotelcol2 col col-2">Type</div>
                        <div className="hotelcol3 col col-3">address</div>
                        <div className="hotelcol4 col col-4">Description</div>
                        <div className="hotelcol5 col col-4">Price</div>
                        <div className="hotelcol6 col col-4">status</div>
                    </li>


                    {hotelData.map((hotel) => (
                        <Hotellist hotel={hotel}/>
                    ))}

                   
                </ul>
            </div>

        </div>
    )
}

export default HotelList