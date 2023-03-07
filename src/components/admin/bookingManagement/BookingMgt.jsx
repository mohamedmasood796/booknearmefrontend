import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import BookingList from '../tableList/BookingList'
import Navbar from '../navbar/Navbar'

const BookingMgt = () => {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="">
                        <div class="container">
                            <h2>Room List</h2>
                            <ul class="responsive-table">

                                <li class="table-header">
                                    <div className="col col-1">Title</div>
                                    <div className="col col-2">Price</div>
                                    <div className="col col-3">maxPeople</div>
                                    <div className="col col-4">Description</div>
                                    <div className="col col-4">Action</div>
                                </li>

                                <BookingList />
                                {/* {roomData.map((room) => (
                        <Roomlist room={room} hotelid={id}/>
                    ))} */}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingMgt
