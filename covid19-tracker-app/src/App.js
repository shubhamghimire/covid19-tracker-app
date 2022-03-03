import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './components/InfoBox';
import Map from './components/Map'
import Table from './components/Table'
import LineGraph from './components/LineGraph'
import { sortData } from './components/util'
import './App.css';
import "leaflet/dist/leaflet.css"

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  // https://disease.sh/v3/covid-19/countries

  // USEEFFECT = Runs a piece of code
  // based a given condition

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      })
  }, [])

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

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("Heyy>>>", countryCode);
    setCountry(countryCode);

    // Ternary operator to retrieve worldwide data if worldwide is selected and
    // specific country data if specific country is selected
    const url = countryCode === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/countries/'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);

        // All of the data from the country response
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long])
      })
    // Getting Worldwide data
    // https://disease.sh/v3/covid-19/countries/

    // Getting a specific country data
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
  };

  console.log("COUNTRY INFO >>>", countryInfo);

  return (
    <div className="app">
      <div className="app_left">
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
          {/* InfoBoxes title="Corona Virus Cases" */}
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />

          {/* InfoBoxes title='Coronavirus Recoveries */}
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />

          {/* InfoBoxes title='Coronavirus Deaths*/}
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        {/* Map */}

        <Map center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app_right">
        <CardContent>
          {/* Table */}
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />

          {/* Graph */}
          <h3>WorldWide New Cases</h3>
          <LineGraph />
        </CardContent>
      </Card>

    </div>

  );
}

export default App;
