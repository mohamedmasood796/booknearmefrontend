import React ,{useState} from 'react'
import './addroom.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { AddHomeOutlined } from '@mui/icons-material';
import {addRoom} from '../../../api/adminReq.js'
import { useParams } from 'react-router-dom';
import RoomTable from '../roomTable/RoomTable';

function    AddRoom() {
    let params = useParams()
    const [formData,setFormData]=useState([])
    const handleChange=(e)=>{
        const {value,name}=e.target
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(formData,"formdataan")
        const response=await addRoom(formData,params.id)
    }
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
                                <label htmlFor="">Room title</label>
                                <input type="text" onChange={handleChange} name="title" placeholder='Room title' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Description</label>
                                <input type="text" onChange={handleChange} name="desc" placeholder='desc' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Price</label>
                                <input type="text" onChange={handleChange} name="price" placeholder='price' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">maxPeople</label>
                                <input type="text" onChange={handleChange} name="maxPeople" placeholder='maxPeople' />
                            </div>
                           
                            <div className="formInput">
                                <label htmlFor="">Room Number</label>
                                <input type="number" onChange={handleChange} name="che" placeholder='Room Number' />
                            </div>
                            <button onClick={handleSubmit}>send</button>
                        </form>
                    </div>
                </div>

                <div>
                    <RoomTable/>
                </div>
            </div>
        </div>
    )
}

export default AddRoom