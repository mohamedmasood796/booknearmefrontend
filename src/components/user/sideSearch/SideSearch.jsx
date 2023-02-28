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
    const [destination, setDestination] = useState(location?.state?.destination)
    const [showDate,setShowDate]=useState(location?.state?.showDate)
    const [dates, setDates] = useState(location?.state?.dates)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location?.state?.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    console.log(destination,54544554);
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACK_END}/api/hotels?city=${destination}`)
    console.log(data,"mt kkkoo data");
    console.log("kok");
    const handleClick=()=>{
        reFetch()
    }
    return (
        <div className='listContainer '>
            <div className='listWrapper md:flex md:gap-5'>
                {dates.length>0 && <div className="listSearch md:sticky md:top-5">
                    <h1 className="lsTitle ">Search</h1>
                    <div className="lsItem">
                        <label htmlFor="">Destination</label>
                        <input type="text"  placeholder={destination} />
                    </div>
                    <div className="lsItem">
                        <label htmlFor="">Check-in Date</label>
                        <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0]?.startDate, 'MM/dd/yyyy')} to ${format(
                            dates[0]?.endDate,
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
                                <input  min={1} className='isOptionInput' placeholder={options?.adult} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input  min={0} className='isOptionInput' placeholder={options?.children} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Room</span>
                                <input  min={1} className='isOptionInput' placeholder={options?.room} />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick}>Search</button>
                </div>}
                <div className="listResult ">
                    {loading ? "loading " : <>
                        {data.length>0 && data?.map(item => (
                            <SearchItem destination={destination} dates={dates} options={options} item={item} key={item._id} />
                        ))}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default SideSearch
