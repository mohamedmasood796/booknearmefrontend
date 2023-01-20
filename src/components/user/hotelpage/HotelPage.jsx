import React from 'react'
import { useState } from 'react';

function HotelPage() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213687017.jpg?k=ac75774c4c0288b621c3ad8d5faeec6cb08e23836cb4daccc537b01ed9582ae4&o=&hp=1'
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243980687.jpg?k=7c65f664b63da7f158fa57d44d174abfbf2b17eb35089cb01bc1ab52cc67a758&o=&hp=1'
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213687017.jpg?k=ac75774c4c0288b621c3ad8d5faeec6cb08e23836cb4daccc537b01ed9582ae4&o=&hp=1'
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243980687.jpg?k=7c65f664b63da7f158fa57d44d174abfbf2b17eb35089cb01bc1ab52cc67a758&o=&hp=1'
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213687017.jpg?k=ac75774c4c0288b621c3ad8d5faeec6cb08e23836cb4daccc537b01ed9582ae4&o=&hp=1'
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243980687.jpg?k=7c65f664b63da7f158fa57d44d174abfbf2b17eb35089cb01bc1ab52cc67a758&o=&hp=1'
        }
    ]
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
    return (
        <div className='hotelContainer flex items-center mt-5 flex-col '>
            {open && <div className="slider sticky top-0 left-0 w-full h-full bg-transparent z-50 flex items-center"> 

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='close text-gray-500 w-10 h-10 cursor-pointer absolute top-5 right-5' onClick={() => setOpen(false)}>
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='letarrow w-10 w-10 text-gray-500 cursor-pointer' onClick={()=>handleMove("l")}>
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                </svg>


                <div className="sliderWrapper w-full h-full flex justify-center items-center">
                    <img src={photos[slideNumber].src} alt="" className="sliderImg  w-[80%] h-[80vh]" />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='letarrow w-10 w-10 text-gray-500 cursor-pointer'  onClick={()=>handleMove("r")}>
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                </svg>


            </div>}
            <div className="hotelWrapper w-full container flex flex-col gap-2.5 relative">
                <button className="bookNow absolute top-2 right-0 border-none px-2.5 py-2.5 bg-[#0071c2] text-white font-bold rounded cursor-pointer ">
                    Reserve or Book Now!
                </button>
                <h1 className="hotelTitle text-2xl	fontbol">Grand Hotel</h1>
                <div className="hotelAddress text-sm flex items-center gap-2.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Elton st 125 new york</span>
                </div>
                <span className="hotelDistance text-[#0071c2] font-medium	">
                    Excellent location - 500m from center
                </span>
                <span className="hotelPrceHighlight text-[#008009] font-medium">
                    Book a stay over $114 at this property and get a free airport taxi
                </span>
                <div className="hotelImages flex flex-wrap justify-between	">
                    {photos?.map((photos, i) => (
                        <div className="hotelImageWrapper w-[33%]  ">
                            <img onClick={() => handleOpen(i)} src={photos?.src} alt="" className="hotelImg w-full object-cover pb-1.5" />
                        </div>
                    ))}
                </div>
                <div className="hotelDetails flex justify-between gap-5 mt-5">
                    <div className="hotelDetailsTexts  ">
                        {/* flex:3 */}
                        <h1 className='hotelTitle font-bold text-4xl'>Stay in the heart of Krekow </h1>
                        <p className='hotelDesc text-sm mt-5 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem dolorum odio, nostrum, ut culpa fuga officiis perspiciatis voluptatem vel aspernatur fugit optio necessitatibus. Dolor tempora nobis laudantium sunt adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, ea tempora? Dolorem quos nobis omnis a sapiente quisquam, exercitationem sint, fugit impedit autem laudantium? Quia perspiciatis nulla veritatis pariatur magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt, eveniet, accusamus perspiciatis quibusdam, culpa alias quos nisi repellat quas recusandae provident ex? Amet autem dolorum ea veniam nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi? Ducimus harum rerum dolore nulla sed ipsa ex, nobis debitis beatae accusamus unde veniam eveniet! Porro dignissimos nobis laboriosam sapiente?
                        </p>
                    </div>
                    <div className="hotelDetailsPrice bg-[#ebf3ff] p-5 flex flex-col gap-5">
                        <h1 className='text-lg font-bold text-[#555]'>Perfect for a 9-night stay!</h1>
                        <span className='text-sm '>
                            Obcaecati eveniet iure sint, esse voluptatibus nobis aspernatur ipsam accusamus similique necessitatibus molestias dicta voluptate coempore unde consequuntur!
                        </span>
                        <h2 className='font-light	'>
                            <b>$945</b>(9 night)
                        </h2>
                        <button className='border-none px-2 py-2 bg-[#0071c2] text-white font-bold cursor-pointer rounded '>Reserve or Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelPage