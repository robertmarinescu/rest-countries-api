import React, {useState, useEffect} from "react"
import Header from "./components/Header"
import SearchIcon from '@mui/icons-material/Search'
import Country from "./components/Country"
import { Routes, Route} from 'react-router-dom'
import CountryDetails from "./components/CountryDetails"
import axios from "axios"

const URL = 'https://restcountries.com/v2/all'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [countries, setCountries] = useState([])

  const switchMode = () => {
    setDarkMode(prevState => !prevState)
  }

  const fetchCountriesData = async () => {
    const response = await fetch(URL);
    const data = await response.json()

    setCountries(data)
  }

  useEffect(() => {
    try{
      fetchCountriesData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode}/>

      <Routes>
        <Route path='/' element={
          <div className='app_body'>
          <div className="inputs">
            <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
              <SearchIcon />
              <input type='text' placeholder='Search for a country...' />
            </div>
            <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
              <select>
                <option>All</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </div>
          </div>

          <div className="countries">
            {/* <Country darkMode={darkMode}/> */}
            {
              countries.map(country => {
                const {numericCode, name, population, region, capital, flag} = country
                return <Country 
                  key={name} 
                  code = {numericCode}
                  darkMode={darkMode}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flag}
                />
              }
            )}
          </div>
        </div>
        }/>
        <Route path='country-details' element={<CountryDetails darkMode={darkMode}/>} />
      </Routes>
    </div>
  )
}

export default App;
