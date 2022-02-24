import React, { useState } from "react"
import { MenuItem, FormControl, Select, } from "@material-ui/core"
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'Nepal', 'Japan', 'Korea'
  ]);


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
                <MenuItem value={country}>{country}</MenuItem>)
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
