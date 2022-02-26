import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select, } from "@material-ui/core";
import InfoBox from './components/InfoBox';
import Map from './components/Map'
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

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
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("Heyy>>>", countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app_header">
        {/* Header */}
        <h1>COVID-19 Tracker</h1>
        {/* Title + Select input dropdown field */}
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}
          >
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {/* Loope through all the countries and list all the countries */}
            {
              countries.map((country =>
                <MenuItem value={country.value}>{country.name}</MenuItem>))
            }
          </Select>
        </FormControl>
      </div>

      <div className="app_stats">
        <InfoBox title="Coronavirus Cases" cases={1000} total={5000} />

        <InfoBox title="Recovered" cases={1000} total={1000} />

        <InfoBox title="Deaths" cases total={300} />
        {/* InfoBoxes title="Corona Virus Cases" */}
        {/* InfoBoxes title='Coronavirus Recoveries */}
        {/* InfoBoxes title='Coronavirus Deaths*/}
      </div>



      {/* Table */}
      {/* Graph */}

      {/* Map */}

      <Map />
    </div>

  );
}

export default App;
