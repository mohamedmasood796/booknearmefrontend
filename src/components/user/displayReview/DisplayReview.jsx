import React, { useEffect, useState } from 'react'
import "./displayReview.css"
import { getUserpro } from "../../../api/authReq.js"

const DisplayReview = ({ item }) => {
    const [user, setUser] = useState()
    const [userFetch, setUserFetch] = useState()
    const [reviewItem, setReviewItem] = useState(item)


    const getuser = async () => {

        const userId = reviewItem.userId
        const { data } = await getUserpro(userId)
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
                        {/* <div className="circle-image pt-4 ">
                            <img src="https://i.imgur.com/hczKIze.jpg" width="" className='h-10' />
                        </div> */}
                        <div className='flex p-4 font-bold'>
                        {userFetch?.username}
                        </div>
                    </div>
                    <div className=''>
                        <p className='max-w-[300px] break-words'> {reviewItem.comment}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayReview
