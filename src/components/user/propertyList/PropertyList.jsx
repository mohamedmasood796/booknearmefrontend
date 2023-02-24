import React from 'react'
import useFetch from '../../../hooks/useFetch'

function PropertyList() {

    const { data, loading, error } = useFetch('https://booknearmeserver.hamrix.store/api/hotels/countByType')
    console.log("masood kuta", data, loading, error)

    const images = [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]

    return (
        
        <div className='pList w-full container flex justify-between gap-3'>
            {loading ? (
                "loading"
            ) : (
                <>
                    { data.map(( data,i) => (
                        <div className='pListItem rounded-xl overflow-hidden cursor-pointer ' key={i}>
                            <img src={images[i]} alt="" className="pListImg w-full h-36 object-cover" />
                            <div className="pListTitles">
                                <h1 className='font-bold '>{data.type}</h1>
                                <h1>{data.count} {data.type} </h1>
                            </div>
                        </div>
                    ))}
                </>
                
            )}
        </div>
    )
}

export default PropertyList