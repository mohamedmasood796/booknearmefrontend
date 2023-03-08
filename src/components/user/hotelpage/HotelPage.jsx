import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from "react-redux"
import Reserve from '../reserve/Reserve';
import Banner from '../../admin/banner/Banner';
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { availability, findHotel, getReview } from '../../../api/authReq';

function HotelPage({ setCheckInglo }) {
    const location = useLocation()
    const [id, setId] = useState(location?.state?.id)
    console.log(id, "it id 44443333333333334444444444443333333")
    console.log(location, "location it id 44443333333333334444444444443333333")

    // or
    // const fulllocation = document.location + '';
    // let id = fulllocation.split('/', [5])
    // id = id[4]
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);


    const [destination, setDestination] = useState(location?.state?.destination)
    const [showDate, setShowDate] = useState(location?.state?.showDate)
    const [dates, setDates] = useState(location?.state?.dates)
    const [options, setOptions] = useState(location?.state?.options)








    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [roomId, selectRoomId] = useState();
    const [availableStatus, setAvailableStatus] = useState({});
    const [data, setData] = useState([]);

    console.log(data, "ccccccccccccccccccccccccccccccccccccheckIn")

    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }


    ///////////////////////////////////////start form/////////////////////////////////////////

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(checkIn, checkOut)
    console.log(alldates, "1111111111111111111111111111111111111")


    //////////////////////////////////////end here///////////////////////////



    // async function bookThisPlace() {
    const bookThisPlace = async () => {
        // const response = await axios.post('/bookings', {
        //     checkIn, checkOut, numberOfGuests, name, phone,
        //     // place: place._id,
        //     // price: numberOfNights * place.price,
        // });
        console.log(roomId)
        console.log('""""""""""""""""""""""""""""""""""""""""""""""""')
        // console.log(roomId)
        // console.log(alldates)
        // const { data } = await availability({ alldates, roomId })
        console.log(data,"wwwq;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
        console.log(data.status,";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
        setAvailableStatus(data)
        console.log(availableStatus,":::::::::::::::::::::::::::::::::::::")
        // if (data.status) {

            setCheckInglo({ checkIn, checkOut, numberOfGuests, name, phone, numberOfNights, roomId,availableStatus,alldates })
        // }
        // const bookingId = response.data._id;
        // setRedirect(`/account/bookings/${bookingId}`);
    }

    // const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels/find/${id}`)


    const fetchHotel = async () => {
        const hoteldata = await getReview(id)
        setData(hoteldata.data)
        console.log(hoteldata, "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
    }

    console.log(data, "3page dataUUUUUUUUUUUUUUUUUUUUUUUU")

    const user = useSelector((state) => state.userAuth)
    console.log("user2345t", user)
    const navigate = useNavigate()
    // const property = useSelector((state) => state.searchresult)

    // console.log("dddddddddddddddddddddd77777777777777777777777777777777", property)
    console.log("dddddddddddddddddddddd777777777777777777777777777777788888888888888887", user)


    // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    // function dayDifference(date1, date2) {
    //     console.log("kkkkkkkkkkkkkkkkk", date1, date2)
    //     const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    //     const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    //     return diffDays;
    // }

    // if (dates.length>0) {

    //     const days = dayDifference(dates?.endDate, dates?.startDate)
    // }


    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1

        }
        setSlideNumber(newSlideNumber)
    }
    // const selectRoom=(e)=>{

    //     console.log(e.target.value,"????????????????????/////////////////////////////")
    // }

    const handleClick = () => {
        if (user) {
            setOpenModal(true)
        } else {
            navigate("/login")
        }
    }

    useEffect(() => {
        fetchHotel()
    }, [])
    return (
        <div>

            <>
                <div className='hotelContainer flex items-center mt-5 flex-col px-2'>
                    {open && <div className="slider sticky top-0 left-0 w-full h-full bg-transparent z-50 flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='close text-gray-500 w-10 h-10 cursor-pointer absolute top-5 right-5' onClick={() => setOpen(false)}>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='letarrow w-10 w-10 text-gray-500 cursor-pointer' onClick={() => handleMove("l")}>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                        </svg>


                        <div className="sliderWrapper w-full h-full flex justify-center items-center">
                            <img src={data.photos[slideNumber]} alt="" className="sliderImg  w-[80%] h-[80vh]" />
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='letarrow w-10 w-10 text-gray-500 cursor-pointer' onClick={() => handleMove("r")}>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>


                    </div>}
                    <div className="hotelWrapper w-full container flex flex-col gap-2.5 relative">
                        {/* <button className="bookNow absolute top-2 right-0 border-none px-2.5 py-2.5 bg-[#0071c2] text-white font-bold rounded cursor-pointer ">
                                Reserve or Book Now!
                            </button> */}
                        <h1 className="hotelTitle text-2xl	fontbol">{data.name}</h1>
                        <div className="hotelAddress text-sm flex items-center gap-2.5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span>{data.address}</span>
                        </div>
                        <span className="hotelDistance text-[#0071c2] font-medium	">
                            Excellent location - {data.distance}m from center
                        </span>
                        <span className="hotelPrceHighlight text-[#008009] font-medium">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>
                        <div className="hotelImages flex flex-wrap justify-between	">
                            {data.photos?.map((photos, i) => (
                                <div className="hotelImageWrapper w-[33%]  ">
                                    <img onClick={() => handleOpen(i)} src={photos} alt="" className="hotelImg w-full object-cover pb-1.5 h-72" />
                                </div>
                            ))}
                        </div>

                        <div className="hotelDetails  md:flex justify-between gap-5 mt-5">
                            <div className="hotelDetailsTexts  ">

                                <h1 className='hotelTitle font-bold text-4xl'>{data.title} </h1>
                                <p className='hotelDesc text-sm mt-5 '>
                                    {data.desc}
                                </p>
                            </div>
                            {/* <div className="hotelDetailsPrice bg-[#ebf3ff] mt-3 p-5 flex flex-col gap-5 md:w-[25%]" >
                                    <h1 className='text-lg font-bold text-[#555]'>Perfect for a {days}-night stay!</h1>
                                    <span className='text-sm '>
                                        Obcaecati eveniet iure sint, esse voluptatibus nobis aspernatur ipsam accusamus similique necessitatibus molestias dicta voluptate coempore unde consequuntur!
                                    </span>
                                    <h2 className='font-light	'>
                                        <b>${days * data.cheapestPrice * property.options.room}</b>({days} night)
                                    </h2>
                                    <button onClick={handleClick} className='border-none px-2 py-2 bg-[#0071c2] text-white font-bold cursor-pointer rounded '>Reserve or Book Now</button>
                                </div> */}


                            {/* ///////////// show Check your room availability  /////////////////// */}



                            {/* <div className="bg-white shadow p-4 rounded-2xl">
                                <div className="text-2xl text-center">
                                    Check your room availability
                                </div>
                                <div className="border rounded-2xl mt-4">
                                    <div className="flex">
                                        <div className="py-3 px-4 ">
                                            <label>Check in:</label>
                                            <input type="date"
                                                value={checkIn}
                                                onChange={ev => setCheckIn(ev.target.value)} />
                                        </div>
                                        <div className="py-3 px-4 border-l">
                                            <label>Check out:</label>
                                            <input type="date" value={checkOut}
                                                onChange={ev => setCheckOut(ev.target.value)} />
                                        </div>
                                    </div>
                                    <div className="py-3 px-4 border-t">
                                        <label>Number of guests:</label>
                                        <input type="number"
                                            value={numberOfGuests}
                                            onChange={ev => setNumberOfGuests(ev.target.value)} />
                                    </div>
                                    {numberOfNights > 0 && (
                                        <div className="py-3 px-4 border-t">
                                            <label>Your full name:</label>
                                            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={name}
                                                onChange={ev => setName(ev.target.value)} />
                                            <label>Phone number:</label>
                                            <input type="tel" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={phone}
                                                onChange={ev => setPhone(ev.target.value)} />
                                            <label>select Room</label>
                                           
                                            <select onChange={ev => selectRoomId(ev.target.value)} className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="hotel" placeholder='select your hotel...'  >
                                                {data?.rooms?.length > 0 && data.rooms.map((item) => (
                                                    <option value={item.roomId._id} key={item.roomId._id}>{item.roomId.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>
                                <button onClick={bookThisPlace} className="primary mt-4 border-none px-2 py-2 bg-[#0071c2] text-white font-bold cursor-pointer rounded">
                                    Book this place
                                    {numberOfNights > 0 && (
                                        <span></span>
                                    )}
                                </button>
                            </div> */}




                        </div>
                    </div>

                </div>
            </>

            {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
        </div>
    )
}

export default HotelPage