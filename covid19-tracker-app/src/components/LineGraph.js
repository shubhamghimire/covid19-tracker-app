import React, { useState, useEffect } from 'react'

import { Line } from "react-chartjs-2";

import numeral from "numeral";


//  ***************** Chat options : 

const options = {

    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },

                },
            },
        ],
    }

}

// ****************  build Chart Data : 

const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {

        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];

    }

    return chartData;
}


// **************** LineGraph Main Function : 

function LineGraph({ casesType, ...props }) {

    //  ********* States :

    const [data, setData] = useState({});


    // ***************** useEffects :

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
                .then(respense => respense.json())
                .then(data => {

                    console.log(data);
                    let chartData = buildChartData(data, casesType);

                    console.log(chartData);
                    setData(chartData);
                });
        }

        fetchData();

    }, [casesType]);

    // ************* LineGraph returns : 

    return (
        <div className={props.className}>
            {/* Check if data exist */}
            { data?.length > 0 && (
                <Line
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204 , 16 , 52 , 0.5)",
                                borderColor: "#CC1034",
                                data: data
                            }
                        ],
                    }}
                />


            )}

        </div>
    )
}

export default LineGraph;