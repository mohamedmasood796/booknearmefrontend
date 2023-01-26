// import './email.css'
// import React from 'react'
// import {useState,useEffect} from 'react'
// import {Link,useParams} from 'react-router-dom'
// import axios from 'axios'
// // import { Button } from '@mui/material'

// function Emailverify() {
//     const [validUrl,setValidUrl]= useState(false)
//     const param = useParams()
//     useEffect(()=>{
//         const verifyEmailUrl=async()=>{
//             try {
//                 const url=`http://localhost:5000/api/auth/${param.id}/verify/${param.token}`
//                 const {data}=await axios.get(url)
//                 console.log(data)
//                 setValidUrl(true)
//             } catch (error) {
//                 console.log(error)
//                 setValidUrl(false)
//             }
//         }
//         verifyEmailUrl()
//     },[param])
//   return (
//     <div>
//         {validUrl ? (
//             <div className="container">
//                 <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fapproved-icon-profile-verification-accept-badge-quality-icon-check-mark-sticker-tick-approved-icon-profile-verification-140966579.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fapproved-icon-profile-verification-accept-badge-quality-icon-check-mark-sticker-tick-approved-icon-profile-verification-image140966579&tbnid=MsayCBJTnI4PEM&vet=12ahUKEwi218iXw-X8AhU3n9gFHfxdCcAQMygQegUIARDoAQ..i&docid=9ghWfrf1EN8GXM&w=800&h=800&q=verify%20tick%20image&ved=2ahUKEwi218iXw-X8AhU3n9gFHfxdCcAQMygQegUIARDoAQ" alt="" />
//                 <h1>Email verified Successfully</h1>
//                 <Link>
//                 <Button className='button'> Login</Button>
//                 </Link>
//             </div>
//         ):(
//             <h1 className="">404 Not found</h1>
//         )}
//     </div>
//   )
// }

// export default Emailverify