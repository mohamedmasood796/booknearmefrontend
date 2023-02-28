import React, { useState,useEffect } from 'react'
import { getBookings } from '../../../api/authReq'

const Profile = () => {
    const [profile, setProfile] = useState(true)


    const bookings=async()=>{
        const { data } = await getBookings()
    }
    useEffect(() => {
        bookings()
    }, [])
    return (
        <>
            <div class="p-16">
                <div class="p-8 bg-white shadow mt-2">
                    <div class="grid grid-cols-1 ">
                        <div class="relative">
                            <div class="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div class="space-x-8 flex justify-between mt-16  ">
                            <button
                                onClick={() => setProfile(true)}
                                class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" >
                                Profile
                            </button>
                            <button
                                onClick={() => setProfile(false)}
                                class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            >
                                Bookings
                            </button>
                        </div>
                    </div>

                    {profile && <><div class="mt-10 text-center border-b pb-7">
                        <h1 class="text-4xl font-medium text-gray-700">Jessica Jones, <span class="font-light text-gray-500">27</span></h1>
                        <p class="font-light text-gray-600">Bucharest, Romania</p>

                        <p class=" text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p class="mt-2 text-gray-500">University of Computer Science</p>
                    </div>

                        <div class="mt-12 flex flex-col justify-center">
                            <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                            <button
                                class="text-gray-500 py-2 px-4  font-medium mt-4"
                            >
                                Show more
                            </button>
                        </div></>}






                    {!profile && <div className=" w-full flex items-center justify-center ">
                        <div className="  w-10/12  ">
                            {/* {room?.map((room) => ( */}

                            <div className="container  rounded-md mt-10 ">
                                <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                                    <img className="w-80 h-60  object-cover rounded-md m-3 "
                                        // src={room.photos[0]}
                                        alt="" />

                                    <div className="p-6 flex flex-col ">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                                            {/* {room.title} */}
                                        </h5>
                                        <p className="text-gray-700 text-base mb-4">
                                            {/* {room.desc} */}
                                        </p>
                                        <p className="text-gray-600 text-xs">Max people :
                                            {/* {room.maxPeople} */}
                                        </p>
                                        <p className="text-gray-700 text-base mb-4">
                                            {/* &#8377;{room.price ? room.price : room.price * numberOfNights} */}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* ))} */}
                        </div>

                    </div>}

                </div>
            </div>

        </>
    )
}

export default Profile
