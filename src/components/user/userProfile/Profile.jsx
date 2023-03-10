import React, { useState, useEffect } from 'react'
import { getBookings, getUser } from '../../../api/authReq'
import { useNavigate } from 'react-router-dom'
import moment from "moment";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { cancleBooking } from '../../../api/adminReq';

const Profile = () => {
    const [profile, setProfile] = useState(true)
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [user, setUser] = useState()

    console.log(data, "momomommmommomomommm")
    console.log(user, "hohohohohohohhoohohohoho")

    const bookings = async () => {
        if (profile) {
            const user = await getUser()
            setUser(user.data)
        } else if (!profile) {
            const { data } = await getBookings()
            console.log(data, "eth or data")
            setData(data)

        }
    }
    useEffect(() => {
        bookings()
    }, [profile])

    function convertDate(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const result = `${day}-${month}-${year}`;
        return result;
    }
    const logOut=()=>{
        localStorage.removeItem("jwt")
        localStorage.removeItem("user")
        navigate('/')
        
    }

    const submit = (userId) => {
        confirmAlert({
          title: 'Confirm to ',
          message: 'Are you want to logout ?',
          buttons: [
            { 
              label: 'Yes',
              onClick: () => { logOut()}
            },
            {
              label: 'No',
            }
          ]
        });
      };

      const cancleOrder = async (id) => {
        console.log(id)
        const data = await cancleBooking(id)
        console.log(data)
      }


      const chageStatus = (id) => {
        confirmAlert({
          title: 'Confirm to ',
          message: 'Are you want to cancel Order ?',
          buttons: [
            { 
              label: 'Yes',
              onClick: () => { cancleOrder(id)}
            },
            {
              label: 'No',
            }
          ]
        });
      };


    return (
        <>
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-2">
                    <div className="grid grid-cols-1 ">
                        <div className="relative">
                            <div className="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className="space-x-8 flex justify-between mt-16  ">
                            <button
                                onClick={() => setProfile(true)}
                                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" >
                                Profile
                            </button>
                            <button
                                onClick={() => setProfile(false)}
                                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            >
                                Bookings
                            </button>
                        </div>
                    </div>

                    {profile && <><div className="mt-10 text-center border-b pb-7">
                        <h1 className="text-4xl font-medium text-gray-700">{user?.username}</h1>
                        <p className="font-light text-gray-600">{user?.email}</p>

                        {/* <p className=" text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p className="mt-2 text-gray-500">University of Computer Science</p> */}
                    </div>

                        {/* <div className="mt-12 flex flex-col justify-center"> */}
                        {/* <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p> */}
                        <button
                            className="text-white py-2 px-4  font-medium mt-4 w-32"
                            onClick={submit}
                        >
                            LogOut
                        </button>
                        {/* </div> */}
                    </>}






                    {!profile && <div className=" w-full flex items-center justify-center ">
                        <div className="  w-10/12  ">
                            {data?.length > 0 && data?.map((booking) => (

                                <div className="container  rounded-md mt-10 ">
                                    <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                                        <img className="w-80 h-60  object-cover rounded-md m-3 "
                                            src={booking.photos[0]}
                                            alt="" />

                                        <div className="p-6 flex flex-col ">
                                            <h5 className="text-gray-900 text-xxl  font-medium mb-2">
                                                Order Id : {booking._id}
                                            </h5>
                                            <h5 className="text-gray-900 text-xl font-medium mb-2">
                                                {booking.title}
                                            </h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                {booking.desc}
                                            </p>
                                            <p className="text-gray-700 text-base mb-4">


                                                {convertDate(booking.checkIn)} to  {convertDate(booking.checkOut)}
                                            </p>
                                            <p className="text-gray-600 text-xs">Number of Night :
                                                {booking.numberOfNights}
                                            </p>
                                            <p className="text-gray-700 text-base mb-4">
                                                &#8377;{booking.price * booking.numberOfNights}
                                            </p>
                                        </div>
                                        <div className='flex justify-center items-center p-5'>

                                            {booking.statusChange === "Booked" ?
                                                <p className="h-7 items-center px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 ">
                                                    {booking.statusChange}
                                                </p>
                                                :
                                                <p className="h-7 items-center px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 ">
                                                    {booking.statusChange}
                                                </p>

                                            }

                                            <div className='p-4'>
                                                <button onClick={()=>chageStatus(booking._id)} className='bg-transparent bg-red-500  font-semibold text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>}

                </div>
            </div>

        </>
    )
}

export default Profile
