import React from 'react'
import './new.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function New() {
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
                                   Image <UploadFileIcon className='icon'/>
                                </label>
                                <input type="file" style={{display:'none'}} id='file'/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Hotel name</label>
                                <input type="text" placeholder='Hotel name' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Type</label>
                                <input type="text" placeholder='Type' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">City</label>
                                <input type="text" placeholder='City' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Address' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">distance</label>
                                <input type="text" placeholder='distance' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Title</label>
                                <input type="text" placeholder=' Title' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Description</label>
                                <input type="text" placeholder=' Description' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Cheapest Price</label>
                                <input type="number" placeholder='Cheapest Price' />
                            </div>
                            <button>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New