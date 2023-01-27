export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },{
        field:"name", headerName:"user",width:230,renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg " src={params.row.img} alt="avatar" />
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
        field:"age",
        headerName:"age",
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


export const userRows=[
    {
        id:1,
        username:"masood",
        img:'https://www.google.com/search?q=men+photo&sxsrf=AJOqlzVHOouUlKtmPzpKsJKXrzXcSbnFLQ:1674760878945&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiuvZe6-uX8AhXy93MBHSRHAZcQ_AUoAXoECAEQAw&biw=1536&bih=718&dpr=1.25#imgrc=VfUSn8lU_-9w0M',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
    {
        id:2,
        username:"masood",
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmale%2520face%2F&psig=AOvVaw0t1B9Y8mZdEN_jwaML6v1u&ust=1674847282873000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiw3Lz65fwCFQAAAAAdAAAAABAE',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
    {
        id:3,
        username:"masooafdd",
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmale%2520face%2F&psig=AOvVaw0t1B9Y8mZdEN_jwaML6v1u&ust=1674847282873000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiw3Lz65fwCFQAAAAAdAAAAABAE',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
    {
        id:4,
        username:"masood",
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmale%2520face%2F&psig=AOvVaw0t1B9Y8mZdEN_jwaML6v1u&ust=1674847282873000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiw3Lz65fwCFQAAAAAdAAAAABAE',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
    {
        id:5,
        username:"masoodfads",
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmale%2520face%2F&psig=AOvVaw0t1B9Y8mZdEN_jwaML6v1u&ust=1674847282873000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiw3Lz65fwCFQAAAAAdAAAAABAE',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
    {
        id:6,
        username:"masooddf",
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmale%2520face%2F&psig=AOvVaw0t1B9Y8mZdEN_jwaML6v1u&ust=1674847282873000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiw3Lz65fwCFQAAAAAdAAAAABAE',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
    {
        id:7,
        username:"masood",
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmale%2520face%2F&psig=AOvVaw0t1B9Y8mZdEN_jwaML6v1u&ust=1674847282873000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiw3Lz65fwCFQAAAAAdAAAAABAE',
        status:'active',
        email:'masood@mail.com',
        age:35
    },
]