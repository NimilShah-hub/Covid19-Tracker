import React, {useState, useEffect} from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core'
import InfoBox from './InfoBox'
import './App.css';


// https://disease.sh/v3/covid-19/countries

//USEEFFECT = Runs a piece of code on given condition

function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    //Code inside here will run once when component loads not again
    // async  -> send a request, wait for it, do something 

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA, FR
          }
        ));
        setCountries(countries);
      })
    }
    getCountriesData();

  }, [])

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)
  }

  return (
    <div className="App">
      {/* Header */}
      {/* Title + Select input dropdown field */}
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>  
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      

        <div className="app__stats">
            <InfoBox title = 'Coronavirus Cases' cases = {123} total = {2000}/>
            <InfoBox title='Recovered' cases={1234} total={3000}/>
            <InfoBox title='Deaths' cases={12345}total={4000}></InfoBox>
            {/* InfoBoxes --- Corona virus cases*/}
            {/* InfoBoxes   Total Recovered*/}
            {/* InfoBoxes  Death */}
        </div>



        {/*  Table */}
        {/* Graphs */}

        {/* Map */}
    </div>
  );
}

export default App;
