import React from 'react'

function Country({darkMode, name, population, region, capital, flag}) {
  return (
    <div className={`country ${darkMode ? 'darkMode' : ''}`}>
        <div className='flag_container'>
            <img src={flag} alt=''></img>
        </div>
        <div className='details'>
            <h3 className='name'>{name}</h3>
            <p>Population: {""}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{population.toLocaleString()}</span>
            </p>
            <p>Region: {""}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{region}</span>
            </p>
            <p>Capital: {""}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{capital}</span>
            </p>
        </div>
    </div>
  )
}

export default Country