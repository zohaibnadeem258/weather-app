import React, { useState } from 'react'
import { fetchWeather, fetchForecast } from '../services/weatherSlice';
import { useDispatch } from 'react-redux';

const Input = () => {

  const [city, setCity] = useState('')
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
  };

  // Search on clicking enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex justify-center flex-row my-5'>
      <input 
        type="text"
        placeholder='Search City'
        className='text-gray-500 text-xl font-light p-2 w-2/4 shadow-xl capitalize
        focus:outline-none bg-slate-50 rounded-md'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Input