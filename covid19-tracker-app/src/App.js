import React from "react"
import { MenuItem, FormControl, Select, } from "@material-ui/core"
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="app_dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">Fruits</MenuItem>
          <MenuItem value="worldwide">Apple</MenuItem>
          <MenuItem value="worldwide">Banana</MenuItem>
          <MenuItem value="worldwide">Grape</MenuItem>
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
  );
}

export default App;
