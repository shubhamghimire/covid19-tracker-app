import React, { useEffect, useState } from "react"
import { MenuItem, FormControl, Select, } from "@material-ui/core"
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  // https://disease.sh/v3/covid-19/countries

  // USEEFFECT = Runs a piece of code
  // based a given condition

  useEffect(() => {
    // The code inside here will run once
    // When the component loads and not again
    // async -> send a request to a server, wait for it, do something with it
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          // [item1, item2, item3]
          // item 1 ... -> returning an object in a shape
          // item 2 ... -> returning an object in a shape
          const countries = data.map((country) => (
            {
              name: country.country,  // Japan, United Kingdom, Nepal
              value: country.countryInfo.iso2 //JPN, UK, NP
            }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [countries])

  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            {/* Loope through all the countries and list all the countries */}
            {
              countries.map(country =>
                <MenuItem value={country.value}>{country.name}</MenuItem>)
            }
          </Select>
        </FormControl>
        {/* Header */}
        {/* Title + Select input dropdown field */}

        {/* InfoBoxes */}
        {/* InfoBoxes */}
        {/* InfoBoxes */}

        {/* Table */}
        {/* Graph */}

        {/* Map */}

      </div>
    </div>

  );
}

export default App;
