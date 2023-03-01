import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./review.css"

const AddBookingId = () => {
    const [bookingId, setBookingId] = useState()

    const handleChange=(e)=>{
        setBookingId(e.target.value)
    }
    console.log(bookingId,"it is booking id")

    return (
        <div className="App">
            <div className="popup">
                <div className="content">
                    {/* <div className="product">
                        <img style={{ width: 60, heigh: 60, objectFit: 'cover' }} src="" alt="image" />
                        <h1>hai Hotel</h1>
                    </div> */}
                    {/* <div className='flex mb-3 mt-3'>
                        {Array(5).fill().map((_, index) => (
                            number>= index + 1 ?(
                                <AiFillStar style={{color:"orange"}} onClick={()=>setNumber(index +1)}/>
                                ):(
                                <AiOutlineStar style={{ color: "orange" }}  onClick={()=>setNumber(index +1)}/>
                            )
                        ))}
                    </div> */}
                    <input placeholder="Booking Id here... "  onChange={handleChange} />
                    <button>submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddBookingId
