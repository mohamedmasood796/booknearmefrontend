import React, { useState, useEffect } from 'react'
import "./hotelList.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { hotelColumns, userRows } from '../datatablesource'
import useFetch from '../../../hooks/useFetch';
import { getAllHotelAPI } from '../../../api/adminReq';

const HotelList = () => {
    const [usersData, setUsersData] = useState([])
    
    
    const myFuc = async () => {
        const { data } = await getAllHotelAPI()
        console.log(data,"12345678")
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
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
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
                getRowId={row=>row._id}
                
            />
        </div>
    )

}

export default HotelList
