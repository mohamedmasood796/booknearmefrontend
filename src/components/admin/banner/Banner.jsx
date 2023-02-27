

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
    let params = useParams()
    // export default function Gridcards({ hotel }) {
    const [room, setRoom] = useState([]);

    console.log(room, "Rooms");

    const { checkIn, checkOut, numberOfGuests, name, phone, numberOfNights } = checkInglo

    console.log(checkIn, "checkin user date")
    useEffect(() => {
        console.log(checkInglo, "masooooo po");
    }, [checkInglo])



    const location = useLocation();
    const data = location?.state?.hotelId;
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
        getRooms(params.id);
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
            {/* <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
                <div className="container mx-auto px-6 flex items-start justify-center">
                    <div className="w-full">
                        <h1 className="mr-12 text-xl lg:text-2xl text-gray-800 dark:text-gray-100 font-bold lg:w-1/2">
                            Available Rooms
                        </h1>
                        {data?.map((room) => (

                            <div className="mx-auto w-full p-5 lg:p-10 bg-white dark:bg-gray-800 shadow rounded">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
                                    <h1 className="mr-12 text-xl lg:text-2xl text-gray-800 dark:text-gray-100 font-bold lg:w-1/2">
                                        {room.title}
                                    </h1>

                                </div>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="w-full lg:w-1/2 pr-0 lg:pr-48">

                                        <div
                                            id="carouselExampleCaptions"
                                            class="carousel slide relative"
                                            data-bs-ride="carousel"
                                        >
                                            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="0"
                                                    className="active"
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="1"
                                                    aria-label="Slide 2"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="2"
                                                    aria-label="Slide 3"
                                                ></button>
                                            </div>
                                            <div className="carousel-inner relative w-full overflow-hidden">
                                                

                                                <div className="carousel-item active relative float-left w-full">
                                                    <img
                                                        src={room.photos[0]}
                                                        className="block w-full"
                                                        alt="..."
                                                    />
                                                    <div className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">
                                                        </h5>
                                                        <p>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        src={room.photos[1]}
                                                        className="block w-full"
                                                        alt="..."
                                                    />
                                                    <div className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">
                                                        </h5>
                                                        <p>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        src={room.photos[1]}
                                                        className="block w-full"
                                                        alt="..."
                                                    />
                                                    <div className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">
                                                        </h5>
                                                        <p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                                type="button"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="prev"
                                            >
                                                <span
                                                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                                                    aria-hidden="true"
                                                ></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                                type="button"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="next"
                                            >
                                                <span
                                                    className="carousel-control-next-icon inline-block bg-no-repeat"
                                                    aria-hidden="true"
                                                ></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="lg:pl-8 w-full lg:w-1/2 flex flex-col lg:flex-row items-start lg:items-center">
                                        <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                                            <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl mb-2 leading-6 mb-1 lg:text-center">
                                                Features Of the Room
                                            </h2>
                                            <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-xl leading-5 text">
                                                {room.desc}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="relative">
                                    <hr className="mt-8 mb-8 lg:mb-10 h-1 rounded bg-gray-200" />
                                </div>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex flex-col lg:flex-row w-full lg:w-2/3 items-start lg:items-center mb-8 lg:mb-0">
                                        <div className="mr-24 flex lg:block  items-center mb-4 lg:mb-0">
                                            <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                                                Per Day
                                            </h3>
                                            <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                                                ₹{room.price}
                                            </h2>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
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

        </>
    )
}

export default Banner
