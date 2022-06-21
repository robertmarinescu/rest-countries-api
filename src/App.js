import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import SearchIcon from '@mui/icons-material/Search'
import Country from './components/Country'
import { Routes, Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails'

const URL_ALL_COUNTRIES = 'https://restcountries.com/v2/all'
const URL_COUNTRY_NAME = 'https://restcountries.com/v2/name'
const URL_COUNTRIES_BY_REGION = 'https://restcountries.com/v2/region'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [countries, setCountries] = useState([])
  const countriesInputRef = useRef();
  const regionRef = useRef()
  const navigate = useNavigate()

  const noCountries = countries.status || countries.message

  const switchMode = () => {
    setDarkMode(prevState => !prevState)
  }

  function fetchResources(fetchFunction) {
    try {
      fetchFunction()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchResources(fetchCountriesData)
  }, [])

  const fetchCountriesData = async () => {
    const response = await fetch(URL_ALL_COUNTRIES)
    const data = await response.json()

    if(data.status === 404) {
      setCountries([])
      return;
    }

    setCountries(data)
  }

  const searchCountries = () => {
    const country = countriesInputRef.current.value;

    if (country.trim()) {
      const fetchCountry = async () => {
        const response = await fetch(`${URL_COUNTRY_NAME}/${country}`)
        const data = await response.json()
        setCountries(data)
      }

      fetchResources(fetchCountry)
    } else {
      fetchCountriesData()
    }
  }

  const searchCountriesBySelectedRegion = () => {
    const region = regionRef.current.value

    if (region.trim()) {
      const fetchRegion = async () => {
        const response = await fetch(`${URL_COUNTRIES_BY_REGION}/${region}`)
        const data = await response.json()

        if (region === 'All') {
          fetchResources(fetchCountriesData)
          return;
        }

        setCountries(data)
      }

      fetchResources(fetchRegion)
    }
  }

  const showDetails = (code) => {
    navigate(`/${code}`)
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
              <select ref={regionRef} onChange={searchCountriesBySelectedRegion}>
                <option>All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </div>
          </div>

          <div className='countries'>
            {!noCountries ? (
              countries.map(country => {
                const {alpha3Code, name, population, region, capital, flag} = country
                return <Country 
                  key={name} 
                  code = {alpha3Code}
                  darkMode={darkMode}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flag}
                  showDetails={showDetails}
                />
              }
            )) : (
              <p>No countries found...</p>
            )}
          </div>
        </div>
        }/>
        <Route 
          path='/:countryCode' 
          element={<CountryDetails 
                      darkMode={darkMode} 
                      countries={countries} 
                      refetch={fetchCountriesData}
                    />
                  } 
        />
      </Routes>
    </div>
  )
}

export default App;
