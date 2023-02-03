import React from 'react'
import useFetch from '../../../hooks/useFetch'

function Featured() {

  const { data, loading, error } = useFetch('http://localhost:5000/api/hotels/countByCity?cities=kondottye,madrid,london')
  console.log("masood", data, loading, error)
  return (
    <div>
    {loading ? ("Loading please wait"):(<> 
    <div className='featured container flex flex-row gap-2 z-1'>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles absolute mb-12 ml-12 ">
          <h1>kondotty</h1>
          <h1>{data[0]} properties</h1>
        </div>
      </div>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles absolute mb-12 ml-12 ">
          <h1>malappuram</h1>
          <h1>{data[1]} properties</h1>
        </div>
      </div>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles absolute  ">
          <h1>London</h1>
          <h1>{data[2]} properties</h1>
        </div>
      </div>
      <div className="featuredItem relative text-black rounded-xl overflow-hidden">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className='featuredImg w-full object-cover h-64	' />
        <div className="featuredTitles    ">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
    </div>
     </>)}
     </div>
  )
}

export default Featured
