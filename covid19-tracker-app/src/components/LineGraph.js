import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";

function LineGraph() {
    const [data, setData] = useState({});

    // Organizing historical data to parse into Line chart
    const buildChartData = (data, casesType = "cases") => {
        const chartData = [];
        let lastDataPoint;

        for (let date in data.cases) {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    // Subtracting previous days cases from today's cases
                    // So that we can get new cases
                    y: data['cases'][date] - lastDataPoint
                }

                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        }
        console.log("Chart Data>>>", chartData)
        return chartData;
    }

    // Getting all historical data for last 50 days
    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => {
                console.log("Graph Data>>>", data);
                const chartData = buildChartData(data);
                setData(chartData);
            })
    }, [])


    return (
        <div>
            {/* Line data options */}
            <h1>This is Graph!</h1>
            <Line data={{
                datasets: [{
                    data: data,
                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                }]
            }} />
        </div>
    )
}

export default LineGraph;
