import React, { useState, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './new.scss'
import axios from "axios";
import toast from 'react-hot-toast';
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { AddHomeOutlined } from '@mui/icons-material';
import { addHotel, getCity } from '../../../api/adminReq.js'
import City from '../city/City';



function New() {

    const [formData, setFormData] = useState([])
    const [image, setImage] = useState([]);
    const [message, setMessage] = useState()
    const [city, setCity] = useState([])
    // const [imageLinks, setImageLinks] = useState([])

    useEffect(() => {
        const fechData = async () => {
            const { data } = await getCity()
            setCity(data.city)
        }
        fechData()
    }, [])

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleFile = (e) => {


    }
    const cloudAPI = process.env.REACT_APP_CLOUD_NAME
    const handleSubmit = async (e) => {
        e.preventDefault();


        const result = new FormData()
        let photos = []
        for (let i = 0; i < image.length; i++) {
            result.append('file', image[i]);
            result.append('upload_preset', "booknearme");
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, result)
            const imageUrl = response.data.url
            photos.push(imageUrl)
        }
        if (photos.length) {
            // const contents = {
            //     formData,
            //     photos
            // }
            formData.photos = photos
            const response = await addHotel(formData)
            if (response.data.message) {
                toast.success(response.data.message)
            }
        }
    }
    const removeImage = (i) => {
        setImage(image.filter((x) => x.name !== i));
    };


    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Hotel</h1>
                </div>
                <div className="bottom">

                    <div className='right'>
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image <UploadFileIcon className='icon' />
                                </label>
                                <input type="file" onChange={(e) => setImage([...image, e.target.files[0]])} style={{ display: 'none' }} id='file' accept='image/*' />
                                <div className=' flex'>

                                    {image.length > 0 && image.map((file, key) => {
                                        return (

                                            <div className='left flex justify-end '>
                                                <i
                                                    onClick={() => {
                                                        removeImage(file.name);
                                                    }}
                                                    className="mdi mdi-close absolute  hover:text-white cursor-pointer"
                                                >
                                                    <div className='flex'>
                                                        {React.createElement(AiOutlineCloseCircle, {
                                                            size: "20",
                                                        })}
                                                    </div>
                                                </i>


                                                <img src={URL.createObjectURL(image[key])} alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Hotel name</label>
                                <input type="text" value={formData.name} onChange={handleChange} name="name" className="name" placeholder='Hotel name' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Type</label>
                                {/* <input type="text" onChange={handleChange} name="type" placeholder='Type' /> */}
                                <select className="dropdown" name="type" onChange={handleChange} >
                                    <option >Apartments</option>
                                    <option > Hotels</option>
                                    <option > Resorts</option>
                                    <option >villas</option>
                                </select>

                            </div>
                            <div className="formInput">
                                <label htmlFor="">City</label>
                                {/* <input type="text" onChange={handleChange} name="city" placeholder='City' /> */}
                                <select className="dropdown" name="city" placeholder='City' onChange={handleChange} >
                                    {city.length > 0 && city.map((item) => (
                                        <option key={item._id}>{item.name}</option>
                                    ))}
                                </select>
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