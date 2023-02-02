import React, { useState, useEffect } from 'react'
import "./users.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatablesource'
import useFetch from '../../../hooks/useFetch';
import { getAllUserAPI } from '../../../api/adminReq';

const Datatable = () => {
    const [usersData, setUsersData] = useState([])
    // const { data } = useFetch(`http://localhost:5000/api/users`)
    
    
    const myFuc = async () => {
        const { data } = await getAllUserAPI()
        setUsersData(data)
        
    }
    useEffect(() => {
        myFuc()
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
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection   
                getRowId={row=>row._id}
            />
        </div>
    )

}

export default Datatable
