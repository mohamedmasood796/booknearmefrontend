import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from "axios";
import toast from 'react-hot-toast';
import { addCity } from '../../../api/adminReq';

const City = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault()

        //file upload to cloudnery
        const cloudAPI = process.env.REACT_APP_CLOUD_NAME
        const result = new FormData()
        console.log(result, "it is goggogo")

        result.append('file', selectedFile);
        result.append('upload_preset', "booknearme");
        console.log(result, "lit is result");
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, result)
        console.log(response, "haid amir")
        const imageUrl = response.data.secure_url
        console.log(imageUrl, "it is image url")


        const data = {
            imageUrl,
            name
        }
        console.log(data,"it si full data like url sn dndamd")
        const cityadded = await addCity(data)
        console.log(cityadded, "hai respose")

        // if(response.data.message){
        //     toast.success(response.data.message)
        // }



    }


    return (
        <div>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="top">
                        <h1>Add New City</h1>
                    </div>
                    <div className="bottom">

                        <div className='right'>
                            <form action="">
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Image <UploadFileIcon className='icon' />
                                    </label>
                                    <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} style={{ display: 'none' }} id='file' />
                                    {/* <div className=' flex'>

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
                                </div> */}
                                </div>

                                <div className="formInput">
                                    <label htmlFor="">Add City</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} name="title" placeholder='Add City' />
                                </div>

                                <button onClick={handleSubmit}>send</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default City
