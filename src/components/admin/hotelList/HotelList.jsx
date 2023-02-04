import React, { useState, useEffect } from 'react'
import "./hotelList.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { hotelColumns, userRows } from '../datatablesource'
import useFetch from '../../../hooks/useFetch';
import { getAllHotelAPI } from '../../../api/adminReq';
import { useNavigate } from "react-router-dom"

const HotelList = () => {
    const [usersData, setUsersData] = useState([])
    const navigate = useNavigate();

    // const togiveRoomid = async (hotelid) => {
    //     console.log(hotelid,"block");
    //     await blockUser({Status:true, userId});

    // };

    const myFuc = async () => {
        const { data } = await getAllHotelAPI()
        console.log(data, "12345678")
        setUsersData(data)

    }
    useEffect(() => {
        myFuc()
        console.log("haidjd")
    }, [])
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                const addRoom = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow, "currentroom id")
                    // togiveRoomid(currentRow._id)
                    navigate(`/admin/addRoom/${currentRow._id}`)

                };
                return (
                    <div className="cellAction">

                        <div className="viewButton" onClick={addRoom}>Add Room</div>
                        <div className="deleteButton">view Room</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]



    return (
        <div className='datatable'>
            <DataGrid
                rows={usersData}
                columns={hotelColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={row => row._id}

            />
        </div>
    )

}

export default HotelList
