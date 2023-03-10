

import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { booking, getbookingsDates, getReview, submintId, submintReview } from "../../../api/authReq.js"

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./review.css"

// import "bootstrap/dist/css/bootstrap.min.css"; 
// import Button from "react-bootstrap/Button"; 
// import Card from "react-bootstrap/Card"; 
import { loadStripe } from "@stripe/stripe-js";


import { getRoomDataById } from "../../../api/authReq";
import DisplayReview from "../../user/displayReview/DisplayReview.jsx";
import HotelRoom from "./HotelRoom.jsx";


// function Banner({ checkInglo }) {//this is importent
function Banner({ checkInglo }) {

    const navigate = useNavigate();
    const location = useLocation()
    const data = location?.state?.hotelId;
    const id = location?.state?.id
    let params = useParams()
    // export default function Gridcards({ hotel }) {
    const [hotelId,setHotelId]=useState(id)
    const [room, setRoom] = useState([]);
    const [open, setOpen] = useState(false)
    const [reviewopen, setReviewOpen] = useState(false)
    const [number, setNumber] = useState(0)
    const [bookingId, setBookingId] = useState()
    const [status, setStatus] = useState()
    const [review, setReview] = useState()
    const [comment, setComment] = useState([])
    const [selectedRoom, setSelectedRoom] = useState()
    const [bookedDates, setBookedDates] = useState([])
    const [disabledButton, setDisabledButton] = useState(false)

    // const { checkIn, checkOut, numberOfGuests, name, phone, numberOfNights, roomId, availableStatus,alldates } = checkInglo
console.log(data,"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
console.log(id,"KKKKKKKKKKKKKLLLLLLLLLLLL")
    useEffect(() => {
    }, [checkInglo])


    const getRooms = async (id) => {

        try {
            const { data } = await getRoomDataById(id);
            setRoom(data.rooms);
        } catch (err) {
        }
    };
    useEffect(() => {
        getRooms(location?.state?.id);
    }, []);



    const reviewfun = async () => {
        const { data } = await getReview(id)
        setComment(data.review)
    }

    const bookingdata = async () => {
        const { data } = await getbookingsDates()
        setBookedDates(data)
    }


    useEffect(() => {

        // bookingdata()

        reviewfun()
    }, [])

    const handleChange = (e) => {
        setBookingId(e.target.value)
    }

    const handleSubmit = async () => {
        const returndata = await submintId({ bookingId })
        setStatus(returndata.data.bookingid)
        setOpen(false)
        // error()
    }


    const handleComment = (e) => {
        setReview(e.target.value)
    }
    const handleReviewSubmit = async () => {
        const reviewData = await submintReview({ id, number, review })
        if (reviewData.data.status) {
            setStatus(false)
        }
    }



    return (
        <>
            <div className=" w-full flex flex-col items-center justify-center ">
                <div className=" items-start  w-10/12  ">
                    {room?.map((room) => (
                        <HotelRoom room={room} hotelId={hotelId}/>
                    ))}
                </div>

                <div className="items-center  container w-80 px-3 flex justify-end  md:mx-20">
                    <button className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded" onClick={() => setOpen(true)}>Add Review</button>
                </div>
                
                <div className="flex gap-2 container overflow-x-scroll md:mx-20 mt-5">
                    {comment.map((item) => (
                        <DisplayReview item={item} />
                    ))}
                </div>
            </div>






            {open && <div className="App">
                <div className="popup">
                    <div className="content ">
                        <div className="flex">
                            <input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Booking Id here... " onChange={handleChange} />
                            <div className="product cursor-pointer" onClick={() => setOpen(false)}>
                                <h1>X</h1>
                            </div>
                        </div>

                        <button onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </div>}




            {status && <div className="App">
                <div className="popup">
                    <div className="content ">

                        {/* <div className="product">
                            <img style={{ width: 60, heigh: 60, objectFit: 'cover' }} src="" alt="image" />
                            <h1>hai Hotel</h1> */}
                        {/* </div> */}
                        <div className='flex mb-3 mt-3 justify-between '>
                            {/* <h1>{handleText()}</h1> */}



                            {/* star raiting */}
                            {/* <div className=" flex">

                                {Array(5).fill().map((_, index) => (
                                    number >= index + 1 ? (
                                        <AiFillStar style={{ color: "orange" }} onClick={() => setNumber(index + 1)} />
                                    ) : (
                                        <AiOutlineStar style={{ color: "orange" }} onClick={() => setNumber(index + 1)} />
                                    )
                                ))}
                            </div> */}

                            <h1 className="cursor-pointer " onClick={() => { setStatus(false) }}>X</h1>
                        </div>
                        <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="comment here... " onChange={handleComment}></textarea >
                        <button onClick={handleReviewSubmit}>submit</button>
                    </div>
                </div>
            </div>}


        </>
    )
}

export default Banner
