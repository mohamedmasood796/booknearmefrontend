import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { getHotel } from '../../../api/authReq'
import useFetch from '../../../hooks/useFetch'

function FeaturedProperts() {
    const [data,setData]= useState([])
    const navigate = useNavigate()
    // const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels`)
    // const newfunction = (id) => {

    //     navigate('/newhotel', { state: { id } })
    // }


    const newfunction=async(id)=>{
       
        
            navigate('/newhotel', { state: { id } })
        


    }
    useEffect(() => {
    const getHot=async()=>{
        const {data}=await getHotel()
        setData(data)
    }
    getHot()
    }, [])

    return (
        <div className='fp w-full container flex justify-between gap-5'>
            <>
                {data.length>0 && data?.map(item => (

                    <div className="fpItem flex-1 gap-3 flex flex-col" key={item?._id}  onClick={() => newfunction(item._id)} >
                        <img src={item?.photos[0]} alt="" className='fpImg w-80 ' />
                        <span className="fpName font-bold  ">{item?.name}</span>
                        <span className="fpCity font-light">{item?.city}</span>
                        <span className="fpPrice font-medium">Starting from &#8377;{item?.cheapestPrice}</span>
                        {item?.rating && <div className="fpRating">
                            <button className='bg-[#003580] text-white p-1 font-semibold' >{item?.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
            </>
            
        </div>
    )
}

export default FeaturedProperts
