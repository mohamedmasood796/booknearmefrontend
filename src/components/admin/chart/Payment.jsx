import React from 'react'


import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { paymentChart } from '../../../api/adminReq';
import { useNavigate } from 'react-router-dom';

const Payment = ({ postGraphCategories, postGraphData }) => {
const navigate=useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await paymentChart()
                const data = res.data;

                setState(prevState => (
                    {
                        ...prevState, options: {
                            ...prevState.options,
                            xaxis: { categories: data.months, },
                        },
                        series: [
                            {
                                name: 'Monthly Revenue',
                                data: data.revenue,
                            },
                        ],
                    }));
            } catch (error) {
                navigate("/newhot")
            }
        };

        fetchData();
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
                data: [10000, 20000, 30000, 40000, 50000, 60000],
            },
        ],
    });

    return (

        <>
            <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
                <h1 className="text-center text-2xl font-bold">Monthly Income </h1>
                <div className="mx-auto">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="600"
                    />
                </div>
            </div>
        </>
    )
}

export default Payment
