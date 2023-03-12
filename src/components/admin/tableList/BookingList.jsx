import React from 'react'
import { cancleBooking } from '../../../api/adminReq';
import { useNavigate } from 'react-router-dom'

const BookingList = ({ hotel }) => {

  const navigate = useNavigate();
  function convertDate(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    const result = `${day}-${month}-${year}`;
    return result;
  }

  const cancleOrder = async (id) => {
    const data = await cancleBooking(id)
  }

  const showBookings=(id)=>{
    navigate(`/admin/showBookings/${id}`)
  }

  return (
    <>
      <li className="table-row">
        <div className="hotelcol1 col col-1" data-label="Job Id">{hotel.userId.username}</div>
        <div className="hotelcol1 col col-1" data-label="Job Id">{hotel.title}</div>
        <div className="hotelcol2 col col-4" data-label="Payment Status">{hotel.price * hotel.numberOfNights}</div>
        <div className="hotelcol3 col col-2" data-label="Customer Name"> {convertDate(hotel.checkIn)} to  {convertDate(hotel.checkOut)} </div>
        {/* <div className="hotelcol4 col col-3" data-label="Amount">{hotel.desc}</div> */}
        
        {hotel.statusChange==="Booked" ? 
        <p className=" h-7 items-center px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 ">
          {hotel.statusChange}
        </p> 
        :
        <p className="h-7 items-center px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 ">
          {hotel.statusChange}
        </p> 

        }
        <div onClick={() => showBookings(hotel._id)} className=" bg-transparent bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-10"  >view</div>

        <div onClick={() => cancleOrder(hotel._id)} className=" bg-transparent bg-red-500  font-semibold text-white py-2 px-4 border border-red-500 hover:border-transparent rounded h-10"  >Cancel</div>
        {/* <div className="hotelcol6 unblockButton" onClick={() => addRoom(hotel._id)} >Add Room</div>
        <div className="blockButton" onClick={() => deleteRoombyid(hotel._id)} >Delete</div> */}

      </li>
    </>
  )
}

export default BookingList
