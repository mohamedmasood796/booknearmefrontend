import React, { useEffect, useState } from 'react'
import { getBookingData } from '../../../api/adminReq'
import { useParams } from 'react-router-dom'

const BookingFullview = () => {
    const { id } = useParams()
    const [bookingdata, setBookingdata] = useState({})


    function convertDate(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const result = `${day}-${month}-${year}`;
        return result;
    }

    useEffect(() => {
        async function getdata() {
            const { data } = await getBookingData(id)
            setBookingdata(data)
            console.log(data, "HHHDHHHDHHDHHDHDHDHDHD")
        }
        getdata()
    }, [])
    return (
        <>
            <div className='pl-96 pr-96 '>
                <div className=" max-w rounded overflow-hidden shadow-lg ">
                    {/* <img className="w-full" src={bookingdata?.photos[0]} alt="Sunset in the mountains " /> */}

                    <div className="px-6 py-4">
                        <div className="font-bold text-3xl mb-2">{bookingdata?.title}</div>
                        <p className="text-gray-700 font-semibold text-base flex mb-6">Status:<p className=' text-base flex'> {bookingdata?.statusChange}</p> </p>
                        <p className="text-gray-700 font-bold text-xl mb-2">
                            Guest Details
                        </p>
                        <p className="text-gray-700 font-semibold text-base flex">Booking ID :<p className=' text-base flex'> {bookingdata?.userId?._id}</p> </p>
                        <p className="text-gray-700 font-semibold text-base flex">Name :<p className=' text-base flex'> {bookingdata?.userId?.username}</p> </p>
                        <p className="text-gray-700 font-semibold text-base flex">Email :<p className=' text-base flex'> {bookingdata?.userId?.email}</p> </p>

                        <p className="text-gray-700 font-bold text-xl mt-10 mb-2">
                            Hotel Details
                        </p>
                        <p className="text-gray-700 font-semibold text-base flex">Room  :<p className=' text-base flex'> {bookingdata?.title}</p> </p>
                        <p className="text-gray-700 0.. font-semibold text-base flex">Description:<p className=' text-base flex'> {bookingdata?.desc}</p> </p>
                        <p className="text-gray-700 0.. font-semibold text-base flex">checkIn:<p className=' text-base flex'> {convertDate(bookingdata?.checkIn)}</p> </p>
                        <p className="text-gray-700 0.. font-semibold text-base flex">checkOut:<p className=' text-base flex'> {convertDate(bookingdata?.checkOut)}</p> </p>
                        <p className="text-gray-700 0.. font-semibold text-base flex">Days:<p className=' text-base flex'> {bookingdata?.numberOfNights}</p> </p>
                        <p className="text-gray-700 0.. font-semibold text-base flex">Booked On:<p className=' text-base flex'> {convertDate(bookingdata?.createdAt)}</p> </p>

                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BookingFullview
