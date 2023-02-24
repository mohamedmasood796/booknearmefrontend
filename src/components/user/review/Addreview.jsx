import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./review.css"

const Addreview = () => {
    const [number, setNumber] = useState(0)

    return (
        <div className="App">
            <div className="popup">
                <div className="content">
                    <div className="product">
                        <img style={{ width: 60, heigh: 60, objectFit: 'cover' }} src="" alt="image" />
                        <h1>hai Hotel</h1>
                    </div>
                    <div>
                        {/* <h1>{handleText()}</h1> */}
                        {Array(5).fill().map((_, index) => (
                            number>= index + 1 ?(
                                <AiFillStar style={{color:"orange"}} onClick={()=>setNumber(index +1)}/>
                                ):(
                                <AiOutlineStar style={{ color: "orange" }}  onClick={()=>setNumber(index +1)}/>
                            )
                        ))}
                    </div>
                    <textarea placeholder="comment here... " ></textarea >
                    <button>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Addreview
