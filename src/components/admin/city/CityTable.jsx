import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCity } from '../../../api/adminReq'
import CityList from '../tableList/CityList'

const CityTable = () => {
    const navigate=useNavigate()
    const [city, setCity] = useState([])

    useEffect(() => {
        myFuc()
    }, [])

    const myFuc = async () => {
        try {

            const { data } = await getCity()
            setCity(data.city)
        } catch (error) {
            navigate("/newhot")
        }
    }

    return (
        <>
            <div className="container">
                <h2>City List</h2>
                <ul className="responsive-table">

                    <li className="table-header">
                        <div className="hotelcol1 col col-1">photo</div>
                        <div className="hotelcol1 col col-1">City</div>
                        <div className="hotelcol6 col col-4">status</div>
                    </li>


                    {city.length > 0 && city?.map((citydata) => (
                        <CityList citydata={citydata} />
                    ))}


                </ul>
            </div>
        </>
    )
}

export default CityTable
