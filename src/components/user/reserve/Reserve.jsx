import React from 'react'
import "./reserve.css"
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Reserve({ setOpen, hotelId }) {
    const navigate=useNavigate()
    const [roomId, setRoomId] = useState('')
    const [selectedRooms, setSelectedRooms] = useState([])
    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels/room/${hotelId}`)
    const dates = useSelector((state) => state.searchresult.dates)
    

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())

        let dates = []
        while (date <= end) {
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return dates
    }
    const alldates = getDatesInRange(dates.startDate, dates.endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => 
            alldates.includes(new Date(date).getTime())
        )
        return !isFound
    }
    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value))
    }

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomNumberId)=>{
                const res=axios.put(`${process.env.REACT_APP_BACK_END}/api/rooms/availability/${roomId}/${roomNumberId}`,{dates:alldates})
                return res.data
            }))
        } catch (error) {
            navigate("/newhot")
        }
    }
    return (
        <div className='reserve'>
            <div className="rContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='rClose ' onClick={() => setOpen(false)}>
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                </svg>
                <span>Select your rooms:</span>
                {data?.map((item) => (
                    <div className="rItem">     
                        <div className="rItemInfo">
                            <div className="rTitle">{item?.title}</div>
                            <div className="rDesc">{item?.desc}</div>
                            <div className="rMax">
                                Max people:<b> {item?.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item?.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item?.roomNumbers.map((roomNumber, _id) => (
                                <div className="room">
                                    <label>{roomNumber?.number}</label>
                                    <input type="checkbox" value={roomNumber?._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} onClick={()=>setRoomId(item._id)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className='rButton' >Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve
