import React,{useEffect,useState} from 'react'
import "./displayReview.css"
import { getUserpro} from "../../../api/authReq.js"

const DisplayReview = ({ item }) => {
    const [user,setUser]=useState()
    const [userFetch,setUserFetch]=useState()
    const [reviewItem,setReviewItem]=useState(item)


    const getuser=async()=>{

        const userId=reviewItem.userId
        const {data}=await getUserpro(userId)
        setUserFetch(data)
    }

    useEffect(() => {
    getuser()
    }, [])

    return (
        <>
            <div className="container d-flex flex justify-content-center mt-5">

                <div className="card text-center mb-5 ">
                    <div className=' flex'>


                        <div className="circle-image">
                            <img src="https://i.imgur.com/hczKIze.jpg" width="50" />

                        </div>
                        {/* <span className="dot"></span> */}

                        <span className="name  fw-500">{userFetch?.username}</span>
                        {/* <small className="text-black-50">Tata Ace</small>
                    <small className="text-black-50 font-weight-bold">QP09AA9090</small> */}




                        <div className="location mt-4">

                            <span className="d-block break-all	"><i className="fa fa-map-marker start"></i> <small className="text-truncate ml-2">{reviewItem.comment}</small> </span>

                            {/* <span><i className="fa fa-map-marker stop mt-2"></i> <small className="text-truncate ml-2">Mandir Road, Mayur vihar, new delhi</small> </span> */}

                        </div>


                        {/* <div className="rate bg-success py-3 text-white mt-3">

                        <h6 className="mb-0">Rate your driver</h6>

                        <div className="rating"> <input type="radio" name="rating" value="5" id="5" /><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                    </div> */}


                        {/* <div className="buttons px-4 mt-0">
                        <button className="btn btn-warning btn-block rating-submit">Submit</button>
                    </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default DisplayReview
