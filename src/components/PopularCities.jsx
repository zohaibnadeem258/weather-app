import React from 'react'
import { fetchWeather, fetchForecast } from '../services/weatherSlice';
import { useDispatch } from 'react-redux';

const PopularCities = () => {

  const dispatch = useDispatch();

  const handleClick = (city) => {
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
  }

  const cities = [
    {
      id: 1,
      name: 'London'
    },
    {
      id: 2,
      name: 'Paris'
    },
    {
      id: 3,
      name: 'Tokyo'
    },
    {
      id: 4,
      name: 'New York'
    },
    {
      id: 5,
      name: 'Dubai'
    }
  ]

  return (
    <>
      <div className='flex items-center justify-around my-6'>
        {
          cities.map((city) => (
            <button 
              key={city.id}
              className='text-lg font-medium hover:bg-slate-500/20 hover:scale-110 px-3 py-2 rounded-md transition ease-in'
              onClick={() => handleClick(city.name)}
            >
              {city.name}
            </button>
          ))
        }
      </div>
    </>
  )
}

export default PopularCities