import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        // If a is greater than b then place a before b otherwise do opposite
        if (a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;

    // One liner code using ternary
    // return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1));
}


// Draw circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType = 'cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
        >

        </Circle>


    ))
);