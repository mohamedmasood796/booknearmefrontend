import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { AddHomeOutlined } from '@mui/icons-material';
import { addHotel } from '../../../api/adminReq.js'

function New() {
    const [formData, setFormData] = useState([])
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData,"formdata")
        const response = await addHotel(formData)
    }
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Hotel</h1>
                </div>
                <div className="bottom">
                    <div className='left'>
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />

                    </div>
                    <div className='right'>
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image <UploadFileIcon className='icon' />
                                </label>
                                <input type="file" style={{ display: 'none' }} id='file' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Hotel name</label>
                                <input type="text" onChange={handleChange} name="name" placeholder='Hotel name' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Type</label>
                                {/* <input type="text" onChange={handleChange} name="type" placeholder='Type' /> */}
                                <select  className="dropdown">
                                    <option onChange={handleChange} type="text" name="type">Apartments</option>
                                    <option onChange={handleChange} type="text" name="type"> Hotels</option>
                                    <option onChange={handleChange} type="text" name="type"> Resorts</option>
                                    <option onChange={handleChange} type="text" name="type">villas</option>
                                </select>
                              
                            </div>
                            <div className="formInput">
                                <label htmlFor="">City</label>
                                <input type="text" onChange={handleChange} name="city" placeholder='City' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Address</label>
                                <input type="text" onChange={handleChange} name="address" placeholder='Address' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">distance</label>
                                <input type="text" onChange={handleChange} name="distance" placeholder='distance' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Title</label>
                                <input type="text" onChange={handleChange} name="title" placeholder=' Title' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Description</label>
                                <input type="text" onChange={handleChange} name="desc" placeholder=' Description' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Cheapest Price</label>
                                <input type="number" onChange={handleChange} name="cheapestPrice" placeholder='Cheapest Price' />
                            </div>
                            <button onClick={handleSubmit}>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New