import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { getHoteltype } from '../../../api/authReq'
import useFetch from '../../../hooks/useFetch'

function PropertyList() {
    const navigate = useNavigate()
    // const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels/countByType`)
    // console.log("masood kuta", data, loading, error)

    // const [type, setType] = useState('')

    // const handleSearch=(type)=>{
    //     console.log(type,88888888888888888)
    //     navigate('/hotels', { state: { type} })
    // }

    const images = [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ]


    const [data,setData]= useState([])
    // const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels`)
    console.log(data,"chepest priceeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    // const newfunction = (id) => {

    //     navigate('/newhotel', { state: { id } })
    // }


    const handleSearch=async(type)=>{
       
        
            navigate('/hotels', { state: { type } })
        


    }
    useEffect(() => {
    const getHot=async()=>{
        const {data}=await getHoteltype()
        console.log(data,'dataaaaaaaaadfFFFFFFFFFFFFFFF');
        setData(data)
    }
    getHot()
    }, [])

    return (
        
        <div className='pList w-full container flex justify-between gap-3'>
           
                <>
                    { data?.map(( data,i) => (
                        <div className='pListItem rounded-xl overflow-hidden cursor-pointer ' key={i} onClick={()=>handleSearch(data.type)}>
                            <img src={images[i]} alt="" className="pListImg  h-36 object-cover w-96 " />
                            <div className="pListTitles">
                                <h1 className='font-bold mt-3'>{data.type}</h1>
                                <h1>{data.count} {data.type} </h1>
                            </div>
                        </div>
                    ))}
                </>
                
            
        </div>
    )
}

export default PropertyList