// import React, { useState, useEffect } from 'react'
// import "./users.scss"
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { userColumns, userRows } from '../datatablesource'
// import useFetch from '../../../hooks/useFetch';
// import { getAllUserAPI, blockUser } from '../../../api/adminReq';

// import { ReplayCircleFilled } from "@mui/icons-material";

// const Datatable = () => {
//     const [usersData, setUsersData] = useState([])
//     const [oneUserData, setOneUserData] = useState([])
//     // const { data } = useFetch(`http://localhost:5000/api/users`)
//     // console.log(oneUserData,"looiasdfasdfasdff")


//     const submitBlockUser = async (userId) => {
//         console.log(userId, "block");
//         await blockUser({ Status: true, userId });
//     };
//     const submitUnblockUser = async (userId) => {
//         console.log(userId, "unblock");
//         await blockUser({ Status: false, userId });
//     };

// const myFuc = async () => {
//     const { data } = await getAllUserAPI()
//     setUsersData(data)

// }
// useEffect(() => {
//     myFuc()
// }, [])


//     const actionColumn = [
//         {
//             field: "action",
//             headerName: "Action",
//             width: 200,
//             renderCell: (params) => {

//                 const submitUnblockUse = (e) => {
//                     const currentRow = params.row;
//                     console.log(currentRow)
//                     setOneUserData(currentRow)
//                     submitUnblockUser(currentRow._id)
//                     console.log(usersData, "kooimasoo")
//                 };
//                 const submitblockUse = (e) => {
//                     const currentRow = params.row;
//                     console.log(currentRow)
//                     setOneUserData(currentRow)
//                     submitBlockUser(currentRow._id)
//                     console.log(usersData, "kooimasoo")

//                 };
//                 console.log("params",params)
//                 return (

//                     <div className="cellAction">

//                         {/* <div className="viewButton">View</div> */}

// {isActive? <div className="unblockButton" onClick={submitUnblockUse}>Unblock</div> :
//     <div className="blockButton" onClick={submitblockUse}>Block</div>}
//                     </div>
//                 )
//             }
//         }
//     ]



//     return (
//         <div className='datatable'>
//             <DataGrid
//                 rows={usersData}
//                 columns={userColumns.concat(actionColumn)}
//                 pageSize={9}
//                 rowsPerPageOptions={[9]}
//                 checkboxSelection
//                 getRowId={row => row._id}
//             />

//         </div>
//     )

// }

// export default Datatable




/////////////////////////////////////////////////////////////////////////////////////////



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
        console.log(data, "datatable")

    }
    useEffect(() => {
        myFuc()
    }, [])



    return (
        <div>
            <div class="container">
                <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2>
                <ul className="responsive-table">

                    <li class="table-header">
                        <div className="usercol1 col col-1">Name</div>
                        <div className="usercol2 col col-2">Email</div>
                        <div className="usercol3 col col-3">Country</div>
                        <div className="usercol4 col col-4">Phone</div>
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