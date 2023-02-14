import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './addroom.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { AddHomeOutlined } from '@mui/icons-material';
import { addRoom } from '../../../api/adminReq.js'
import { useParams } from 'react-router-dom';
import RoomTable from '../roomTable/RoomTable';
import axios from "axios";

function AddRoom() {
    let params = useParams()
    const [image, setImage] = useState([]);
    const [formData, setFormData] = useState([])
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData, "formdataan")
        setFormData(formData)

        //file upload to cloudnery
        const cloudAPI = process.env.REACT_APP_CLOUD_NAME
        const result = new FormData()

        let photos = []
        for (let i = 0; i < image.length; i++) {
            console.log(image[i])
            result.append('file', image[i]);
            result.append('upload_preset', "booknearme");
            console.log(result);
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, result)
            console.log(response, "haid amir")
            const imageUrl = response.data.url
            console.log(imageUrl,)
            photos.push(imageUrl)
        }
        if (photos.length) {

            formData.photos = photos
            console.log(formData, "hai hotel full datas")
            // const response = await addHotel(formData)
            const response = await addRoom(formData, params.id)

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
                    <h1>Add New Room</h1>
                </div>
                <div className="bottom">

                    <div className='right'>
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image <UploadFileIcon className='icon' />
                                </label>
                                <input type="file" onChange={(e) => setImage([...image, e.target.files[0]])} style={{ display: 'none' }} id='file' multiple accept='image/*' />
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
                                <label htmlFor="">Room title</label>
                                <input type="text" onChange={handleChange} name="title" placeholder='Room title' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Description</label>
                                <input type="text" onChange={handleChange} name="desc" placeholder='desc' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Price</label>
                                <input type="number" onChange={handleChange} name="price" placeholder='price' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">maxPeople</label>
                                <input type="number" onChange={handleChange} name="maxPeople" placeholder='maxPeople' />
                            </div>

                            {/* <div className="formInput">
                                <label htmlFor="">Room Number</label>
                                <input type="number" onChange={handleChange} name="che" placeholder='Room Number' />
                            </div> */}
                            <button onClick={handleSubmit}>send</button>
                        </form>
                    </div>
                </div>

                <div>
                    <RoomTable />
                </div>
            </div>
        </div>
    )
}

export default AddRoom