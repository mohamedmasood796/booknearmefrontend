import React from 'react'
import './sideSearch.css'
import { useLocation } from "react-router-dom"
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../searchItem/SearchItem'
import useFetch from '../../../hooks/useFetch'



function SideSearch() {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    const { data, loading, error, reFetch } = useFetch(`http://localhost:5000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999999}`)
    console.log("mubu pottan ennpottan",data) 

    const handleClick=()=>{
        reFetch()
    }
    return (
        <div className='listContainer '>
            <div className='listWrapper '>
                <div className="listSearch ">
                    <h1 className="lsTitle ">Search</h1>
                    <div className="lsItem">
                        <label htmlFor="">Destination</label>
                        <input type="text"  placeholder={destination} />
                    </div>
                    <div className="lsItem">
                        <label htmlFor="">Check-in Date</label>
                        <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
                            dates[0].endDate,
                            'MM/dd/yyyy'
                        )}`}</span>

                        {openDate && (<DateRange onChange={(item) => setDates([item.selection])}
                            minDate={new Date()}
                            ranges={dates} />)}
                    </div>
                    <div className='lsItem'>
                        <label>Options</label>
                        <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Min Price <small>per night</small></span>
                                <input  onChange={e=>setMin(e.target.value)} className='isOptionInput' />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Max Price <small>per night</small></span>
                                <input  onChange={e=>setMax(e.target.value)} className='isOptionInput' />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult</span>
                                <input  min={1} className='isOptionInput' placeholder={options.adult} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input  min={0} className='isOptionInput' placeholder={options.children} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Room</span>
                                <input  min={1} className='isOptionInput' placeholder={options.room} />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick}>Search</button>
                </div>
                <div className="listResult ">
                    {loading ? "loading " : <>
                        {data.map(item => (
                            <SearchItem  item={item} key={item._id} />
                        ))}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default SideSearch
