import React,{useState} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { booking } from '../../../api/authReq';

const HotelRoom = ({room,checkInglo}) => {
    const [selectedRoom, setSelectedRoom] = useState()
    console.log(room,"this is roo00000000000000000000000000000000000000")
    console.log(checkInglo,"??????????????????????????????????????????????????")
    

    async function handleClick(oneroom) {
        setSelectedRoom(oneroom._id)

        const newOrder = {
            ...oneroom,
            ...checkInglo,
            alldates
        }
        console.log(oneroom, 'onerooomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM');
        console.log(checkInglo, 'chekcingooo))))))))))))))))))))))))))00000000000000000000000');
        console.log(newOrder, 'QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQnew ordererrrrersjdhhkfskjdfhajkhdfjkahkfhakjdhmashood kuattal');

        // const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
        // console.log(stripe, "stripe good")
        // const body = { newOrder };
        // console.log(body, "this is bbbbbbbbbbbbbbbbBbbbbbbbbbbbBBBBBBBBBBBB")
        // const headers = {
        //     "Content-Type": "application/json",
        // };

        // const { data } = await booking(
        //     body
        // );
        // if (data?.url) {
        //     window.location.href = data.url
        // }
        //////////////////////////////////////////////booking check work
    }
    console.log(selectedRoom, "it si sected troomssssssssssssssssssssssssssssssssss")



    const { checkIn, checkOut, numberOfGuests, name, phone, numberOfNights, roomId, availableStatus,alldates } = checkInglo
    console.log(availableStatus,"nnnnnnLLLLLLLLLLLLLLLLLLLLL")

    return (
        <>
            <div className="container  rounded-md mt-10 ">
                <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                    <img className="w-80 h-60  object-cover rounded-md m-3 " src={room?.roomId?.photos[0]} alt="" />

                    <div className="p-6 flex flex-col ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{room?.roomId?.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {room?.roomId?.desc}
                        </p>
                        <p className="text-gray-600 text-xs">Max people :  {room?.roomId?.maxPeople}</p>
                        <p className="text-gray-700 text-base mb-4">
                            &#8377;{room?.roomId?.price ? room?.roomId?.price : room?.roomId?.price * numberOfNights}
                        </p>
                    </div>

                    {availableStatus?.status  ?

                        (<div className="items-center w-full px-3 flex justify-end ">
                            <button className="border-none px-2 py-2 bg-[#ff0202] text-white cursor-pointer rounded">This Room already Booked</button>
                        </div>)
                        :
                        (<div className="items-center w-full px-3 flex justify-end ">
                            <button onClick={() => handleClick(room.roomId)} className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded">Book Now</button>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default HotelRoom
