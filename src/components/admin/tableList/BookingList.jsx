import React from 'react'

const BookingList = ({hotel}) => {
  console.log(hotel,"???????????????HHHHHHHHHHHHHHHH")
  return (
    <>
      <li className="table-row">
        <div className="hotelcol1 col col-1" data-label="Job Id">{hotel.title}</div>
        <div className="hotelcol2 col col-4" data-label="Payment Status">{hotel.price*hotel.numberOfNights}</div>
        <div className="hotelcol3 col col-2" data-label="Customer Name">{hotel.checkIn} to{hotel.checkOut} </div>
        <div className="hotelcol4 col col-3" data-label="Amount">{hotel.desc}</div>
        <div className="hotelcol5 col col-3" data-label="Amount">{"status chage dropdown"}</div>

         <div className="hotelcol6 unblockButton"  >Add Room</div>
        {/* <div className="hotelcol6 unblockButton" onClick={() => addRoom(hotel._id)} >Add Room</div>
        <div className="blockButton" onClick={() => deleteRoombyid(hotel._id)} >Delete</div> */}

      </li>
    </>
  )
}

export default BookingList
