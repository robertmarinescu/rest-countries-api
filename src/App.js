import React, {useState, useEffect, useRef} from 'react'
import Header from './components/Header'
import SearchIcon from '@mui/icons-material/Search'
import Country from './components/Country'
import { Routes, Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails'

const URL_ALL_COUNTRIES = 'https://restcountries.com/v2/all'
const URL_COUNTRY_NAME = 'https://restcountries.com/v2/name'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [countries, setCountries] = useState([])
  const countriesInputRef = useRef();
  const regionRef = useRef()

  const noCountries = countries.status || countries.message

  const switchMode = () => {
    setDarkMode(prevState => !prevState)
  }

  useEffect(() => {
    try {
      fetchCountriesData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchCountriesData = async () => {
    const response = await fetch(URL_ALL_COUNTRIES)
    const data = await response.json()
    console.log('response=> ', data)
    setCountries(data)
  }

  const searchCountries = () => {
    const country = countriesInputRef.current.value;

    if(country.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(`${URL_COUNTRY_NAME}/${country}`)
        const data = await response.json()
        console.log('Search country => ', data)
        setCountries(data)
      }

      try {
        fetchSearch()
      } catch (error) {
        console.error(error)
      }
    } else {
      fetchCountriesData()
    }
  }

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode}/>

      <Routes>
        <Route path='/' element={
          <div className='app_body'>
          <div className='inputs'>
            <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
              <SearchIcon />
              <input type='text' placeholder='Search for a country...' ref={countriesInputRef} onChange={searchCountries}/>
            </div>
            <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
              <select ref={regionRef}>
                <option>All</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </div>
          </div>

          <div className='countries'>
            {!noCountries ? (
              countries.map(country => {
                const {numericCode, name, population, region, capital, flag} = country
                console.log(noCountries)
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
            )) : (
              <p>No countries found...</p>
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
