import React from 'react'

function searchItem() {
    return (
        <div className='searchItem border border-gray-300 p-2.5 rounded flex justify-between gap-5 mb-5 '>
            <img src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                className='siImg w-52 h-52 object-cover gap-2.5 '/>
            <div className="siDesc flex flex-col gap-y-1">
                <h1 className="siTitle font-bold text-xl text-[#0071c2]">Tower Street Apartments</h1>
                <span className="siDistance text-xs">500m frm center</span>
                <span className="siTexiOp text-xs bg-[#008009] text-white max-w-fit p-1 rounded">Free airport taxi</span>
                <span className="siSubtitle font-bold text-xs pt-2">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures text-xs ">
                    Entire studio 1 bathroom 21m2 1 full bed
                </span>
                <span className="siCancelOp text-xs text-[#008009] font-bold ">Free Cancellation</span>
                <span className="siCancelOpSubtitle  text-sm text-[#008009] ">
                    You can cancel later , so lock in this great price today!
                </span>
            </div>
            <div className="siDetails flex flex-col justify-between">
                <div className="siRating flex justify-between">
                    <span className='font-medium '>Excllent</span>
                    <button className='bg-[#003580] text-white p-2.5 font-bold'>8.9</button>
                </div>
                <div className="siDetailTexts text-right flex flex-col gap-2.5">
                    <span className="siPrice text-2xl">$123</span>
                    <span className="siTaxOp text-xs text-gray-400">Includes taxes and fees</span>
                    <button className='siCheckButton bg-[#0071c2] text-white  py-2.5 px-2.5 border-none cursor-pointer rounded'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default searchItem
