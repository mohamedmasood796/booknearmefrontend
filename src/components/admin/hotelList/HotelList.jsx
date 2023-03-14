
import { useState, useEffect } from 'react'
import React from 'react'
import { getAllHotelAPI } from '../../../api/adminReq';
import "./hotelList.scss"
import Userlist from '../tableList/Userlist';
import Hotellist from '../tableList/Hotellist';
import { useNavigate } from 'react-router-dom';


function HotelList() {
    const navigate = useNavigate()
    const [hotelData, setHotelData] = useState([])

    const myFuc = async () => {
        try {
            const { data } = await getAllHotelAPI()
            setHotelData(data)
        } catch (error) {
            navigate("/newhot")
        }
    }
    useEffect(() => {
        myFuc()
    }, [])



    return (
        <div>
            <div className="container">
                <h2>HOTEL LIST </h2>
                <ul className="responsive-table">

                    <li className="table-header">
                        <div className="hotelcol1 col col-1">Hotel Name</div>
                        <div className="hotelcol2 col col-2">Type</div>
                        <div className="hotelcol3 col col-3">address</div>
                        <div className="hotelcol4 col col-4">Description</div>
                        <div className="hotelcol5 col col-4">Price</div>
                        <div className="hotelcol6 col col-4">status</div>
                    </li>


                    {hotelData.map((hotel) => (
                        <Hotellist hotel={hotel} />
                    ))}


                </ul>
            </div>

        </div>
    )
}

export default HotelList