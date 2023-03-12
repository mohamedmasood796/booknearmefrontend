import React from 'react'


import { useState,useEffect } from "react";
import Chart from "react-apexcharts";
import { bookingChart } from '../../../api/adminReq';

const Bookings = ({ postGraphCategories, postGraphData }) => {

    useEffect(()=>{
        const fetchData =async () => {
          try {
            
            const {data}=await bookingChart()
          
  
            setState(prevState=>(
              {...prevState,options:{
                ...prevState.options,
                xaxis: {categories: data.months},},
              
              series:[
                {
                  name:'Monthly Booking',
                  data:data.booking
                }
              ]
            }
            ))
          } catch (error) {
            console.error(error);
          }
          
          // setMonth(data.months)
          // setBookings(data.bookings)
          
        };
        fetchData()
      }, []);

    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            },
        },
        series: [
            {
                name: "series-1",
                data: [1991, 1992, 1993, 1994, 1995, 1996],
            },
        ],
    });
    return (
        <>
            <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
                <h1 className="text-center text-2xl font-bold">Monthly Booking </h1>
                <div className="mx-auto">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        width="600"
                    />
                </div>
            </div>
        </>
    )
}

export default Bookings
