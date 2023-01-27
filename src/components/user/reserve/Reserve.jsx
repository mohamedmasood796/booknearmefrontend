import React from 'react'
import useFetch from '../../../hooks/useFetch'

function Reserve({ setOpen, hotelId }) {
    console.log(hotelId ,"466626266262622625525")
    const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/room/${hotelId}`)
    // const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/room/63c7c3339a55a2c49f8c618d`)
    console.log(data,'mubashir kasssssssssssss')
    console.log(loading,'mubashir kaddddddddddddddd')
    console.log(error,'mubashir kwwwwwwwwww')
    return (
        <div className='reserve'>
            <div className="rContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='rClose text-gray-500 w-10 h-10 cursor-pointer absolute top-5 right-5' onClick={()=>setOpen(false)}>
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                </svg>
                <span>Select your rooms:</span>
                {data.map((item)=>{
                    console.log(item,"kondottyee");
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Max people:<b> {item.maxPeople}</b> </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Reserve
