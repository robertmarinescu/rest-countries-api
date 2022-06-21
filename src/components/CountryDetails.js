import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom'

function CountryDetails({darkMode, countries, refetch}) {
  const params = useParams()
  const navigate = useNavigate()

  let name
  let flagImage
  let nativeName
  let population
  let region
  let subRegion
  let capital
  let topLevelDomain
  let currencies = []
  let languages = []
  let borders = []

  countries.forEach(country => {
      if(country.alpha3Code === params.countryCode) {
          name = country.name
          flagImage = country.flag
          nativeName = country.nativeName
          population = country.population
          region = country.region
          subRegion = country.subregion
          capital = country.capital
          topLevelDomain = country.topLevelDomain
          country.currencies?.forEach(currency => {
              currencies.push(currency.name)
          })
          country.languages?.forEach(language => {
              languages.push(language.name)
          })
          country.borders?.forEach(border => {
              borders.push(border)
          })
      }
  });

  const goBackToTheMainPage = () => {
      navigate('/')
  }

  return (
    <div className='country_details'>
        <button className={`back ${darkMode ? 'darkMode' : ''}`} onClick={goBackToTheMainPage}>
            <ArrowBackIcon/>
            <p>Go Back</p>
        </button>

        <div className='country_details_body'>
            <div className='img_container'>
                <img src={flagImage} alt=''/>
            </div>
            <div className='info'>
                <h2>{name}</h2>
                <div className='info_container'>
                    <div className='left_info'>
                        <p>Native Name: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{nativeName}</span>
                        </p>
                        <p>Population: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{population.toLocaleString()}</span>
                        </p>
                        <p>Region: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{region}</span>
                        </p>
                        <p>Sub Region: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{subRegion}</span>
                        </p>
                        <p>Capital: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{capital}</span>
                        </p>
                    </div>
                    <div className='right_info'>
                        <p>Top Level Domain: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{topLevelDomain}</span>
                        </p>
                        <p>Currencies:
                            {currencies.map(currency => {
                                if (currencies.indexOf(currency) !== currencies.length -1 ) {
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{currency},</span>
                                    )
                                } else {
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{' '}{currency}</span>
                                    )
                                }
                            })}
                        </p>
                        <p>Languages:
                            {languages.map(language => {
                                if (languages.indexOf(language) !== languages.length -1 ) {
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{language},</span>
                                    )
                                } else {
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}]`}>{' '}{language}</span>
                                    )
                                }
                            })}
                        </p>
                    </div>
                </div>

                Border Countries:
                {borders.length? (
                    borders.map(border => (
                        <div 
                            key={border} 
                            className={`border_country ${darkMode ? 'darkMode' : ''}`} 
                            onClick={() => {
                                refetch()
                                navigate(`/${border}`)
                            }}
                        >
                            <p>{border}</p>
                        </div>
                    ))
                ) : (
                    <div className={`values ${darkMode ? 'darkMode' : ''}`}>
                        <p>No borders</p>
                    </div>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default CountryDetails