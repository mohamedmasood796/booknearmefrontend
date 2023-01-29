import React from 'react'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import {useSelector} from "react-redux"

function Reserve({ setOpen, hotelId }) {

    const [selectedRooms,setSelectedRooms] = useState([])
    const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/room/${hotelId}`)
    const dates=  useSelector((state)=>state.searchresult.dates) 
    console.log(dates, 'mubashir kasssssssssssss')

    const getDatesInRange=(startDate,endDate)=>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date =new Date(start.getTime())

        let list=[]
        while(date<= end){
            list.push(new Date(date).getTime())
            date.setDate(date.getDate()+1)
        }
        return list
    }
    const alldates=getDatesInRange(dates.startDate,dates.endDate)

    const handleSelect=(e)=>{
        const checked=e.target.checked
        const value= e.target.value  
        setSelectedRooms(checked ? [...selectedRooms,value]:selectedRooms.filter((item)=>item!==value ))
    }
    const handleClick=()=>{

    }
    return (
        <div className='reserve'>
            <div className="rContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='rClose text-gray-500 w-10 h-10 cursor-pointer absolute top-5 right-5' onClick={() => setOpen(false)}>
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
                        {item?.roomNumbers.map((roomNumber,_id)=>(
                            <div className="room">
                                <label>{roomNumber?.number}</label>
                                <input type="checkbox" value={roomNumber?._id} onChange={ handleSelect} />
                            </div>
                        ))}
                    </div>
                ))}
                <button onClick={handleClick} className='rButton' >Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve
