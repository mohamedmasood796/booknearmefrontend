export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },{
        field:"name", headerName:"user",width:230,renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg " src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    // {
    //     field:"_id",
    //     headerName:"user id",
    //     width:230,
    // },
    {
        field:"email",
        headerName:"Email",
        width:200,
    },
    {
        field:"country",
        headerName:"Country",
        width:100,
    },
    {
        field:"city",
        headerName:"City",
        width:100,
    },
    {
        field:"phone",
        headerName:"Phone",
        width:100,
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    },
    
]


export const hotelColumns=[
    { field: 'id', headerName: 'ID', width: 70 },{
        field:"name", headerName:"user",width:230,renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg " src={params.row.img || "https://i.ibb.co/MBtjqXO/no-avatar.gif"} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email",
        headerName:"Email",
        width:230,
    },
    {
        field:"country",
        headerName:"Country",
        width:100,
    },
    {
        field:"city",
        headerName:"City",
        width:100,
    },
    {
        field:"phone",
        headerName:"Phone",
        width:100,
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    },
    
]