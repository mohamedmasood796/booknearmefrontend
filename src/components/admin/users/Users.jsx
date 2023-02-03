import React, { useState, useEffect } from 'react'
import "./users.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatablesource'
import useFetch from '../../../hooks/useFetch';
import { getAllUserAPI ,blockUser} from '../../../api/adminReq';

const Datatable = () => {
    const [usersData, setUsersData] = useState([])
    const [oneUserData, setOneUserData] = useState([])
    // const { data } = useFetch(`http://localhost:5000/api/users`)
    console.log(usersData,"kooimasoo")
    // console.log(oneUserData,"looiasdfasdfasdff")

    const submitBlockUser = async (userId) => {
        console.log(userId,"block");
        await blockUser({Status:true, userId});

    };
    const submitUnblockUser = async (userId) => {
        console.log(userId,"unblock");
        await blockUser({Status:false, userId});
        
    };

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
            renderCell: (params) => {
                const submitUnblockUse = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow)
                    setOneUserData(currentRow)
                    submitUnblockUser(currentRow._id)
                };
                const submitblockUse = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow)
                    setOneUserData(currentRow)
                    submitBlockUser(currentRow._id)
                };
                return (
                    <div className="cellAction">
                        {/* <div className="viewButton">View</div> */}
                        <div className="unblockButton" onClick={submitUnblockUse}>Unblock</div>
                        <div className="blockButton" onClick={submitblockUse}>Block</div>
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
                getRowId={row => row._id}
            />
            
        </div>
    )

}

export default Datatable
