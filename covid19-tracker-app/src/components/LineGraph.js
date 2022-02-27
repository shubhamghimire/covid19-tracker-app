import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";

function LineGraph() {
    const [data, setData] = useState({});

    // Getting all historical data for last 50 days
    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <div>
            {/* Line data options */}
            <h1>This is Graph!</h1>

        </div>
    )
}

export default LineGraph;
