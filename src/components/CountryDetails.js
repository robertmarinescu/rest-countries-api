import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CountryDetails({darkMode}) {
  return (
    <div className='country_details'>
        <button className={`back ${darkMode ? 'darkMode' : ''}`}>
            <ArrowBackIcon/>
            <p>Go Back</p>
        </button>

        <div className='country_details_body'>
            <div className='img_container'>
                <img src='https://flagcdn.com/be.svg' alt=''/>
            </div>
            <div className='info'>
                <h2>Name</h2>
                <div className='info_container'>
                    <div className='left_info'>
                        <p>Native Name: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>Belgie</span>
                        </p>
                        <p>Population: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>11,319,511</span>
                        </p>
                        <p>Region: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>Europe</span>
                        </p>
                        <p>Sub Region: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>Western Europe</span>
                        </p>
                        <p>Capital: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>Brussels</span>
                        </p>
                    </div>
                    <div className='right_info'>
                        <p>Top Level Domain: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>.be</span>
                        </p>
                        <p>Currencies: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>Euro</span>
                        </p>
                        <p>Languages: {''}
                            <span className={`values ${darkMode ? 'darkMode' : ''}]`}>Dutch, French, German</span>
                        </p>
                    </div>
                </div>

                Border Countries:
                <div className={`border_country ${darkMode ? 'darkMode' : ''}`}>
                    <p>France</p>
                </div>
                <div className={`border_country ${darkMode ? 'darkMode' : ''}`}>
                    <p>Germany</p>
                </div>
                <div className={`border_country ${darkMode ? 'darkMode' : ''}`}>
                    <p>Netherlands</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountryDetails