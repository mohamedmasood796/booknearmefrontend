

import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { booking, getReview, submintId, submintReview } from "../../../api/authReq.js"

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./review.css"

// import "bootstrap/dist/css/bootstrap.min.css"; 
// import Button from "react-bootstrap/Button"; 
// import Card from "react-bootstrap/Card"; 
import { loadStripe } from "@stripe/stripe-js";


import { getRoomDataById } from "../../../api/authReq";
import DisplayReview from "../../user/displayReview/DisplayReview.jsx";

function Banner({ checkInglo }) {

    const navigate = useNavigate();
    const location = useLocation()
    const data = location?.state?.hotelId;
    const id = location?.state?.id
    console.log(id, 9876543211)
    let params = useParams()
    // export default function Gridcards({ hotel }) {
    const [room, setRoom] = useState([]);
    const [open, setOpen] = useState(false)
    const [reviewopen, setReviewOpen] = useState(false)
    const [number, setNumber] = useState(0)
    const [bookingId, setBookingId] = useState()
    const [status, setStatus] = useState()
    const [review, setReview] = useState()
    const [comment, setComment] = useState([])

    console.log(room, "Rooms");

    const { checkIn, checkOut, numberOfGuests, name, phone, numberOfNights } = checkInglo

    console.log(checkIn, "checkin user date")
    useEffect(() => {
        console.log(checkInglo, "masooooo po");
    }, [checkInglo])



    // const Id = data.hotel._id;
    // const Id = hotel._id;
    // console.log(Id, "id of hotel in grid");
    // console.log(data.hotel.images[0],"lllllllllllllll")

    const getRooms = async (id) => {
        console.log(id, "id of hotel in grid");

        try {
            console.log(id, "Hotel Id in grid hamras");
            const { data } = await getRoomDataById(id);
            setRoom(data);
            console.log(data, "ppppppppppp");
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getRooms(location?.state?.id);
        console.log(params.id, "hari murathe dalam")
    }, []);



    const reviewfun = async () => {
        const { data } = await getReview(id)
        console.log(data, "get reviewsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
        setComment(data.review)
    }
    useEffect(() => {
        reviewfun()
    }, [])


    async function handleClick(oneroom) {
        console.log(oneroom, "room delat")
        console.log(checkInglo, "checkIn glo")
        const newOrder = {
            ...oneroom,
            ...checkInglo,

        }

        const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
        console.log(stripe, "stripe good")
        const body = { newOrder };
        console.log(body, "this is b")
        const headers = {
            "Content-Type": "application/json",
        };

        const { data } = await booking(
            body
        );
        if (data?.url) {
            window.location.href = data.url
        }

    }



    const handleChange = (e) => {
        setBookingId(e.target.value)
    }
    console.log(bookingId, "it is booking id")

    const handleSubmit = async () => {
        const returndata = await submintId({ bookingId })
        console.log(returndata, "it is order data")
        setStatus(returndata.data.bookingid)
        setOpen(false)
        // error()
    }
    console.log(status, "eth status")


    const handleComment = (e) => {
        setReview(e.target.value)
        console.log(e.target.value)
    }
    const handleReviewSubmit = async () => {
        const reviewData = await submintReview({ id, number, review })
        console.log(reviewData, "it si review data")
        console.log(reviewData.data, "data .status")
        if (reviewData.data.status) {
            setStatus(false)
        }
    }



    return (
        <>
            <div className=" w-full flex items-center justify-center ">
                <div className="  w-10/12  ">
                    {room?.map((room) => (
                        // <div className=" container border-4 ">
                        //     <div className="flex flex-col md:flex-row  w-full rounded-lg bg-white shadow-lg">
                        //         <img className=" w-full h-96  md:h-80 object-cover md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg " src={room.photos[0]} alt="" />
                        //         <div className="p-6 flex flex-col justify-start">
                        //             <h5 className="text-gray-900 text-xl font-medium mb-2">{room.title}</h5>
                        //             <p className="text-gray-700 text-base mb-4">
                        //                 {room.desc}
                        //             </p>
                        //             <p className="text-gray-600 text-xs">Max people : {room.maxPeople}</p>
                        //             <p className="text-gray-700 text-base mb-4">
                        //                 {room.price ? room.price : room.price * numberOfNights}
                        //             </p>
                        //         </div>
                        //         <div className="items-center w-full px-3 justify-end  flex">
                        //             <button onClick={() => handleClick(room)} className="border-none px-2 py-2 bg-[#0071c2] text-white font-bold cursor-pointer rounded">reserve here</button>
                        //         </div>
                        //     </div>
                        // </div>

                        <div className="container  rounded-md mt-10 ">
                            <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                                <img className="w-80 h-60  object-cover rounded-md m-3 " src={room.photos[0]} alt="" />

                                <div className="p-6 flex flex-col ">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{room.title}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {room.desc}
                                    </p>
                                    <p className="text-gray-600 text-xs">Max people :  {room.maxPeople}</p>
                                    <p className="text-gray-700 text-base mb-4">
                                        &#8377;{room.price ? room.price : room.price * numberOfNights}
                                    </p>
                                </div>
                                <div className="items-center w-full px-3 flex justify-end ">
                                    <button onClick={() => handleClick(room)} className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="items-center container w-80 px-3 flex justify-end  ">
                <button className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded" onClick={() => setOpen(true)}>Add Review</button>
            </div>

            {comment.map((item) => (
                <DisplayReview item={item} />
            ))}





            {open && <div className="App">
                <div className="popup">
                    <div className="content ">
                        <div className="product cursor-pointer" onClick={() => setOpen(false)}>
                            <h1>X</h1>
                        </div>

                        <input placeholder="Booking Id here... " onChange={handleChange} />
                        <button onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </div>}




            {status && <div className="App">
                <div className="popup">
                    <div className="content">
                        <div className="product">
                            <img style={{ width: 60, heigh: 60, objectFit: 'cover' }} src="" alt="image" />
                            <h1>hai Hotel</h1>
                            <h1 className="cursor-pointer" onClick={() => { setStatus(false) }}>X</h1>
                        </div>
                        <div className='flex mb-3 mt-3'>
                            {/* <h1>{handleText()}</h1> */}
                            {Array(5).fill().map((_, index) => (
                                number >= index + 1 ? (
                                    <AiFillStar style={{ color: "orange" }} onClick={() => setNumber(index + 1)} />
                                ) : (
                                    <AiOutlineStar style={{ color: "orange" }} onClick={() => setNumber(index + 1)} />
                                )
                            ))}

                        </div>
                        <textarea placeholder="comment here... " onChange={handleComment}></textarea >
                        <button onClick={handleReviewSubmit}>submit</button>
                    </div>
                </div>
            </div>}


        </>
    )
}

export default Banner
