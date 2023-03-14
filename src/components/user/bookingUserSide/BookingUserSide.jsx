import React,{useState} from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import { cancleBooking } from '../../../api/adminReq';

const BookingUserSide = ({ booking }) => {
const navigate=useNavigate()
    const [cancel, setCancel] = useState(booking.statusChange === "Booked" && new Date(new Date().toDateString()) <= new Date(booking.checkIn.toString()) || new Date(new Date().toDateString()) >= new Date(booking.checkIn.toString()) && new Date(new Date().toDateString()) <= new Date(booking.checkOut.toString()))
    function convertDate(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const result = `${day}-${month}-${year}`;
        return result;
    }

    const cancleOrder = async (id) => {
        try {
            const data = await cancleBooking(id)
        } catch (error) {
            navigate("/newhot")
        }
    }


    const chageStatus = (id) => {
        confirmAlert({
            title: 'Confirm to ',
            message: 'Are you want to cancel Order ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { cancleOrder(id) }
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    return (
        <>
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

                        {/* {booking.statusChange === "Booked" ?
                            <p className="h-7 items-center px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 ">
                                {booking.statusChange}
                            </p>
                            :
                            <p className="h-7 items-center px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 ">
                                {booking.statusChange}
                            </p>

                        } */}

                        {booking.statusChange === "Booked" && new Date(new Date().toDateString()) <= new Date(booking.checkIn.toString()) ?
                            (<p className=" h-7 items-center px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 ">
                                {booking.statusChange}
                            </p>)
                            : booking.statusChange === "Canceled" ?
                                (<p className="h-7 items-center px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 ">
                                    {booking.statusChange}
                                </p>)
                                : new Date(new Date().toDateString()) >= new Date(booking.checkIn.toString()) && new Date(new Date().toDateString()) <= new Date(booking.checkOut.toString()) ?
                                    (<p className=" h-7 items-center px-4 py-1 text-sm text-yellow-600 font-semibold rounded-full border border-yellow-200 ">
                                        checkined
                                    </p>)
                                    :
                                    // ()=>setCancel(true)
                                    (
                                        <p className="h-7 items-center px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 ">
                                            checkOut
                                        </p>
                                    )
                        }

                        <div className='p-4'>
                            {/* <button onClick={() => chageStatus(booking._id)} className='bg-transparent bg-red-500  font-semibold text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>Cancel</button> */}
                            {booking.statusChange === "Canceled" || !cancel ?

                                < div className=" cursor-not-allowed  py-2 px-4 text-white bg-gray-300 rounded focus:outline-none" disabled  >Cancel</div>
                                :
                                < div onClick={() => chageStatus(booking._id)} className=" cursor-pointer bg-transparent bg-red-500  font-semibold text-white py-2 px-4 border border-red-500 hover:border-transparent rounded h-10 "  >Cancel</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingUserSide
