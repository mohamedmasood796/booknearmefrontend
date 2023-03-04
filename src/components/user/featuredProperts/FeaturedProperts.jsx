import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'

function FeaturedProperts() {
    const navigate = useNavigate()
    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels`)
    console.log(data,"chepest price")
    const newfunction = (id) => {

        navigate('/newhotel', { state: { id } })
    }

    return (
        <div className='fp w-full container flex justify-between gap-5'>
            {loading ? ("Loading") : (<>
                {data?.map(item => (

                    <div className="fpItem flex-1 gap-3 flex flex-col" key={item._id}  onClick={() => newfunction(item._id)} >
                        <img src={item?.photos[0]} alt="" className='fpImg w-80 ' />
                        <span className="fpName font-bold  ">{item.name}</span>
                        <span className="fpCity font-light">{item.city}</span>
                        <span className="fpPrice font-medium">Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button className='bg-[#003580] text-white p-1 font-semibold' >{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
            </>
            )}
        </div>
    )
}

export default FeaturedProperts
