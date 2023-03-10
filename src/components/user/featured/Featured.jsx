import React from 'react'

import useFetch from '../../../hooks/useFetch'
import { useState, useEffect } from 'react';

import { searchbarAction } from '../../../redux/Searchbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountByCity } from '../../../api/authReq';

function Featured() {
  const [city, setCity] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchHotel = (name) => {
   
    dispatch(searchbarAction.newSearch({ city: name }))
    navigate('/hotels', { state: { destination: name} })

  }

  useEffect(() => {
    const fechData = async () => {
      const { data } = await getCountByCity()
      setCity(data)
    }
    fechData()
  }, [])

  return (
    <div>
      {/* {loading ? ("Loading please wait"
      ) : ( */}
      <>
        <div className='md:flex'>

          {city?.length > 0 && city.map((item) => (

            <div onClick={() => searchHotel(item.name)}  key={item?._id}className='featured container flex flex-row gap-2 z-1'>
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
