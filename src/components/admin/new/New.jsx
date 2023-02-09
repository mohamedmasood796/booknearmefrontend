import React, { useState } from 'react'
import S3 from "aws-sdk/clients/s3";
import './new.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { AddHomeOutlined } from '@mui/icons-material';
import { addHotel } from '../../../api/adminReq.js'

function New() {

    const S3_BUCKET = process.env.REACT_APP_BUCKETNAME
    const accessKeyId = process.env.REACT_APP_accessKeyId;
    const region = process.env.REACT_APP_region
    const secretAccessKey = process.env.REACT_APP_secretAccessKey;
    
    const s3 = new S3({
        region,
        accessKeyId,
        secretAccessKey,
    });
    const [formData, setFormData] = useState([])
    const [files, setFile] = useState([]);
    const [message, setMessage] = useState()
    const [imageLinks, setImageLinks] = useState([])
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleFile = (e) => {
        let file = e.target.files;
        for (let i = 0; i < file.length; i++) {
            const fileType = file[i]["type"];
            const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
            if (validImageTypes.includes(fileType)) {
                setFile([...files, file[i]]);
            } else {
                setMessage("only images accepted");
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(files);
        await files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = async (e) => {
                const result = e.target.result;
                const uploadParams = {
                    Bucket: S3_BUCKET,
                    Key: Date.now() + file.name,
                    Body: result,
                };
                await s3.upload(uploadParams)
                    .promise()
                    .then((res) => {
                        console.log(res.Location);
                        setImageLinks((imageLinks) => [...imageLinks, res.Location]);
                        console.log(res.Location, "formdata")
                    });
            };
        });
        // const response = await addHotel(formData)
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
                                <input type="file" onChange={handleFile} style={{ display: 'none' }} id='file' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Hotel name</label>
                                <input type="text" onChange={handleChange} className="name" placeholder='Hotel name' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Type</label>
                                {/* <input type="text" onChange={handleChange} name="type" placeholder='Type' /> */}
                                <select className="dropdown">
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