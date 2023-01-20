import React from 'react'
import "./header.css"
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import {useNavigate} from "react-router-dom"

function Header({ type }) {
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate=useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch =()=>{
        navigate('/hotels',{state:{destination,date,options}})
    }
    return (
        <div className='header bg-[#003580] text-white flex justify-center relative'>
            <div className={type?"headerContainer w-full container mt-5  max-sm:mb-1":"headerContainer w-full container mt-5 mb-24 max-sm:mb-1"}>
                <div className="headerList flex gap-10 mb-12 ">
                    <div className="headerListItem flex items-center gap-2 hover:bg-white rounded-3xl px-5 py-2 hover:bg-opacity-20 active:bg-white active:bg-opacity-20 active:border-white">
                        <ion-icon name="bed"></ion-icon>
                        <span >Stays</span>
                    </div>

                    <div className="headerListItem flex items-center gap-2 hover:bg-white rounded-3xl px-5 py-2 hover:bg-opacity-20 active:bg-white active:bg-opacity-20 active:border-white">
                        <ion-icon name="book"></ion-icon>
                        <span>Stays</span>
                    </div>
                </div>

               {type !=="list" &&
                <>
                <div className='hidden md:inline'>
                    <h1 className=" headerTitle text-4xl">Find your next stay</h1>
                    <p className='headerDesc mt-8 mb-8 text-xl'>Search low prices on hotels, homes and much more...</p>
                </div>
                <div className='max-sm:hidden'>
                    <div className="headerSearch ">
                        <div className="headerSearchItem">
                            <ion-icon className='headerIcon' name="bed"></ion-icon>
                            <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)} />
                            
                        </div>

                        <div className="headerSearchItem">
                            <ion-icon className='headerIcon' name="calendar-number-outline"></ion-icon>
                            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')} `} </span>

                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                                minDate={new Date()}
                            />}
                        </div>


                        <div className="headerSearchItem">
                            <ion-icon className='headerIcon' name="person-circle-outline"></ion-icon>
                            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'> {`${options.adult}adult · ${options.children} children · ${options.room} room`} </span>

                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">

                                        <button disabled={options.children <= 1} className="optionCounterButton" onClick={() => handleOption("children", 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", 'i')}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        <div className="headerSearchItem">
                            <button className='headerBtn bg-[#003580] text-white px-5 py-2 ' onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
                </>}

                {/* small screen view */}
                <div className="md:hidden">
                    <div className="py-5 px-2 bg-white text-black">
                        <h3 className="text-xl font-bold">Search</h3>
                        <p>Destination,properties,even an address</p>
                    </div>
                    <div className=" bg-orange-400 m-5">
                        <div className="py-1 px-1">
                            <div className="grid gap-1">
                                <div className="rounded-sm  bg-white py-3">
                                    <div className="flex justify-between px-4">
                                        <div className="flex gap-2 w-full h-full ">
                                            <span className=''>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black font-bold">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                </svg>
                                            </span>

                                            <input type="text" className=" w-full h-9 outline-none text-gray-500  " placeholder="Malappuram" />
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    {/* <div className="rounded-sm bg-white p-2 w-2/4">
                                        <div className="flex justify-between px-4">
                                            <div className="grid">
                                                <ion-icon className='headerIcon' name="calendar-number-outline"></ion-icon>
                                                <span className='headerSearchText'>date to date</span>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="rounded-sm bg-white p-3  w-full  ">
                                        <div className="flex justify-between px-4">
                                            <div className="grid">
                                                <ion-icon className='headerIcon' name="calendar-number-outline"></ion-icon>
                                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')} `} </span>

                                                {openDate && <DateRange
                                                    editableDateInputs={true}
                                                    onChange={item => setDate([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={date}
                                                    className='datem'
                                                    minDate={new Date()}
                                                />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-sm  bg-white">
                                    <div className="flex justify-around px-4">
                                        {/* <div className="border-r-gray-600 border-r-2 w-2/6 px-1 py-2">
                                            <p>Adualts</p>
                                            <div className="">
                                                <input placeholder="1" type="number" className="w-14 outline-none" />
                                            </div>
                                        </div>
                                        <div className="border-r-gray-600 border-r-2 w-2/6 px- py-2">
                                            <p>Children</p>
                                            <div className="">
                                                <input placeholder="1" type="number" className="w-14 outline-none" />
                                            </div>
                                        </div>
                                        <div className="w-2/6 px-1 py-2">
                                            <p>Rooms</p>
                                            <div className="">
                                                <input placeholder="1" type="number" className="w-14 outline-none" />
                                            </div>
                                        </div> */}

                                        <div className='px-3 py-4'>
                                            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'> {`${options.adult}adult · ${options.children} children · ${options.room} room`} </span>
                                            {openOptions && <div className="optionsmobaile">
                                                <div className="optionItem">
                                                    <span className="optionText">Adult</span>
                                                    <div className="optionCounter">
                                                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", 'd')}>-</button>
                                                        <span className="optionCounterNumber">{options.adult}</span>
                                                        <button className="optionCounterButton" onClick={() => handleOption("adult", 'i')}>+</button>
                                                    </div>
                                                </div>
                                                <div className="optionItem">
                                                    <span className="optionText">Children</span>
                                                    <div className="optionCounter">

                                                        <button disabled={options.children <= 1} className="optionCounterButton" onClick={() => handleOption("children", 'd')}>-</button>
                                                        <span className="optionCounterNumber">{options.children}</span>
                                                        <button className="optionCounterButton" onClick={() => handleOption("children", 'i')}>+</button>
                                                    </div>
                                                </div>
                                                <div className="optionItem">
                                                    <span className="optionText">Room</span>
                                                    <div className="optionCounter">
                                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", 'd')}>-</button>
                                                        <span className="optionCounterNumber">{options.room}</span>
                                                        <button className="optionCounterButton" onClick={() => handleOption("room", 'i')}>+</button>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>

                                    </div>
                                </div>
                                <div className="rounded-sm  bg-blue-500 py-4">
                                    <div className="flex justify-center px-4 text-xl">
                                        <div className="flex gap-2">
                                            <p>Search</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
