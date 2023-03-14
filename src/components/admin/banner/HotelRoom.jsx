import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { differenceInCalendarDays } from "date-fns";
import { availability, booking } from '../../../api/authReq';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
const HotelRoom = ({ room, hotelId }) => {
    console.log(hotelId, "it is last page ")

    const navigate = useNavigate();
    const [selectedRoom, setSelectedRoom] = useState()
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [status, setStatus] = useState(null);
    const [roomId, setRoomId] = useState(room.roomId._id)

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    async function handleClick(oneroom) {
        try {
            if (localStorage.getItem("jwt")) {
                if (checkIn && checkOut) {
                    const { data } = await availability({ alldates, roomId })
                    setStatus(data.status)
                } else {
                    toast.error("please select date")
                }

            } else {
                navigate('/login')
            }
        } catch (error) {
            navigate("/newhot")
        }
    }

    const paymentFunction = async (oneroom) => {
        try {
            
            const newOrder = {
                oneroom,
                alldates,
                checkIn,
                checkOut,
                numberOfNights,
                hotelId
            }
            const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
            const body = { newOrder };
            const headers = {
                "Content-Type": "application/json",
            };
    
            const { data } = await booking(
                body
            );
            if (data?.url) {
                window.location.href = data.url
            }
        } catch (error) {
            navigate("/newhot")
        }
    }



    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }
    const alldates = getDatesInRange(checkIn, checkOut)


    // const { numberOfGuests, name, phone, numberOfNights, roomId, availableStatus, alldates } = checkInglo

    return (
        <>

            <div className="container  rounded-md mt-10 ">
                <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                    <img className="w-80 h-60  object-cover rounded-md m-3 " src={room?.roomId?.photos[0]} alt="" />

                    <div className="p-6 flex flex-col ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{room?.roomId?.title}</h5>
                        <p className="text-gray-700 text-base mb-4">{room?.roomId?.desc}</p>
                        <p className="text-gray-600 text-xs">Max people :  {room?.roomId?.maxPeople}</p>
                        {/* <p className="text-gray-700 text-base mb-4">
                            &#8377;{"999999"}
                        </p> */}
                        <p className="text-gray-700 text-base mb-4">
                            &#8377;{room?.roomId?.price ? (room?.roomId?.price) : (room?.roomId?.price * numberOfNights)}
                        </p>
                    </div>

                    <div>
                        <div className="flex">
                            <div className="py-3 px-4 ">
                                <label>Check in:</label>
                                <input type="date"
                                    value={checkIn}
                                    onChange={ev => {
                                        setCheckIn(ev.target.value)
                                        setStatus(null)
                                    }} required />
                            </div>
                            <div className="py-3 px-4 border-l">
                                <label>Check out:</label>
                                <input type="date" value={checkOut}
                                    onChange={ev => {
                                        setCheckOut(ev.target.value)
                                        setStatus(null)

                                    }} required />
                            </div>
                        </div>

                        {<div className="items-center w-full px-3 flex justify-end " >
                            <button onClick={() => handleClick(room.roomId)} className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded">Check Availability </button>
                        </div>}


                        {status ?

                            (<div className="items-center w-full px-3 flex justify-end ">
                                <button onClick={() => paymentFunction(room.roomId)} className="border-none px-2 py-2 bg-[#25d63d] text-white cursor-pointer rounded">Book Now </button>
                            </div>)
                            : status === false ?
                                (<div className="items-center w-full px-3 flex justify-end ">
                                    <button className="border-none px-2 py-2 bg-[#ff0202] text-white cursor-pointer rounded">This Room already Booked</button>
                                </div>) : <></>
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default HotelRoom
// status?.status ? (<></>) :
