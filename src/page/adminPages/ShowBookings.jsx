import React from 'react'
import BookingFullview from '../../components/admin/bookingfullView/BookingFullview'
import Navbar from '../../components/admin/navbar/Navbar'
import Sidebar from '../../components/admin/sidebar/Sidebar'

const ShowBookings = () => {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="">
                        <BookingFullview />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowBookings
