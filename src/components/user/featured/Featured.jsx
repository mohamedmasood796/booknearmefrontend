import React from 'react'
import useFetch from '../../../hooks/useFetch'


function Featured() {

  const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels/countByCity?cities=dubai,munnar,london,maldives`)
  console.log("masood kooi", data, loading, error)
  return (
    <div>
    {loading ? ("Loading please wait"):(<> 
    <div className='featured container flex flex-row gap-2 z-1'>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://www.mendix.com/wp-content/uploads/iStock-1309800161-scaled.jpg" alt="" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles absolute mb-12 mt-3 font-medium">
          <h1>Dubai</h1>
          <h1>{data[0]} properties</h1>
        </div>
      </div>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://oneday.travel/wp-content/uploads/one-day-munnar-local-sightseeing-tour-package-with-top-station-by-private-car-header.jpg" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles absolute mb-12 mt-3 font-medium ">
          <h1>Munnar</h1>
          <h1>{data[1]} properties</h1>
        </div>
      </div>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://img.theculturetrip.com/wp-content/uploads/2016/12/15370068_1035790139884003_4402134645231811449_o.jpg" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles absolute mt-3 font-medium ">
          <h1>London</h1>
          <h1>{data[2]} properties</h1>
        </div>
      </div>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://travellersworldwide.com/wp-content/uploads/2022/05/shutterstock_1938868960-2.png.webp" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles mt-3 font-medium   ">
          <h1>Maldives</h1>
          <h1>{data[3]}  properties</h1>
        </div>
      </div>
    </div>
     </>)}
     </div>
  )
}

export default Featured
