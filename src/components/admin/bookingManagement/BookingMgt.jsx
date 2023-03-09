import React,{useState,useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import BookingList from '../tableList/BookingList'
import Navbar from '../navbar/Navbar'
import { bookingDetails } from '../../../api/adminReq'

const BookingMgt = () => {

    const [bookingData, setBookingData] = useState([])

    const myFuc = async () => {
        const { data } = await bookingDetails()
        setBookingData(data)
        console.log(data, "datatableT T")

    }
    useEffect(() => {
        myFuc()
    }, [])

    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="">
                        <div class="container">
                            <h2>Booking List</h2>
                            <ul class="responsive-table">

                                <li class="table-header">
                                    <div className="col col-1">user</div>
                                    <div className="col col-1">Room</div>
                                    <div className="col col-2">Price</div>
                                    <div className="col col-3">checkIn / checkOut</div>
                                    {/* <div className="col col-4">Description</div> */}
                                    <div className="col col-4">Status</div>
                                    <div className="col col-4">Action</div>
                                </li>

                                {/* <BookingList /> */}
                                {bookingData.map((hotel) => (
                                    <BookingList hotel={hotel} />
                                ))}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingMgt
