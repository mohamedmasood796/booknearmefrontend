import React from 'react'
import { getCity } from '../../../api/adminReq'
import useFetch from '../../../hooks/useFetch'
import { useState, useEffect } from 'react';

import { searchbarAction } from '../../../redux/Searchbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Featured() {
  const [city, setCity] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dates, setDates] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
]);
const [options, setOptions] = useState({
  adult: 1,
  children: 0,
  room: 1
})
  // const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels/countByCity?cities=dubai,munnar,london,maldives`)
  // console.log("masood kooi", data, loading, error)

  const searchHotel = (name) => {
    console.log(name);
   
    dispatch(searchbarAction.newSearch({ city: name }))
    navigate('/hotels', { state: { destination: name,dates,options} })

  }

  useEffect(() => {
    const fechData = async () => {
      const { data } = await getCity()
      setCity(data.city)
      console.log(data.city, "eth fechData 243u899999999999999999999999999999999999999999")
    }
    fechData()
  }, [])

  return (
    <div>
      {/* {loading ? ("Loading please wait"
      ) : ( */}
      <>
        <div className='md:flex'>

          {city.length > 0 && city.map((item) => (

            <div onClick={() => searchHotel(item.name)} className='featured container flex flex-row gap-2 z-1'>
              <div className="featuredItem relative text-black rounded-xl overflow-hidden">
                <div>
                  <img src={item?.imageUrl} alt="" className='featuredImg w-full object-cover h-64	' />
                </div>
                <div className="featuredTitle mb-12 mt-3 font-medium">
                  <h3 className='font-bold text-xl'>{item?.name}</h3>
                  {/* <button > properties</button> */}
                  <h3> properties</h3>
                </div>
              </div  >
            </div  >
          ))}
        </div>
      </>
      {/* )} */}
    </div>
  )
}

export default Featured
