

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { booking } from "../../../api/authReq.js"

// import "bootstrap/dist/css/bootstrap.min.css"; 
// import Button from "react-bootstrap/Button"; 
// import Card from "react-bootstrap/Card"; 
import { loadStripe } from "@stripe/stripe-js";


import { getRoomDataById } from "../../../api/authReq";

function Banner({ checkInglo }) {
    const navigate = useNavigate();
    const location = useLocation()
    const data = location?.state?.hotelId;
    const id = location?.state?.id
    console.log(id,9876543211)
    let params = useParams()
    // export default function Gridcards({ hotel }) {
    const [room, setRoom] = useState([]);

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
        getRooms( location?.state?.id);
        console.log(params.id, "hari murathe dalam")
    }, []);

    async function handleClick(oneroom) {


        console.log(oneroom, "room delat")
        console.log(checkInglo, "checkIn glo")
        const newOrder = {
            ...oneroom,
            ...checkInglo,

        }
        // const BookingResponse = await booking(newOrder)

        // console.log(BookingResponse, "good rsponse")



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
        console.log(data, "hai take of interview")

        // const session = await response.json();

        // const result = stripe.redirectToCheckout({
        //     sessionId: session.id,
        // });

        // if (result.error) {
        //     console.log(result.error);
        // }



        // navigate("/checkout");


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
            <div className="items-center container w-80 px-3 flex justify-end ">
                <button className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded">Add Review</button>
            </div>

        </>
    )
}

export default Banner
