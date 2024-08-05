import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaThermometerEmpty } from 'react-icons/fa'
import { FiWind } from 'react-icons/fi'
import formatToLocalTime from '../utils/Time';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { GiSunset } from 'react-icons/gi';

const TemperatureDetails = ({ weather }) => {

  // To convert time from api to local time of that city
  const sunset = formatToLocalTime(weather?.sys.sunset, weather?.timezone, 'hh:mm a')

  const details = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: 'Feels Like',
      value: `${weather.main.feels_like.toFixed()}°`
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: 'Humidity',
      value: `${weather.main.humidity.toFixed()}%`
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: 'High',
      value: `${weather.main.temp_max.toFixed()}°`
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: 'Low',
      value: `${weather.main.temp_min.toFixed()}°`
    },
    {
      id: 5,
      Icon: GiSunset,
      title: 'Sunset',
      value: sunset
    },
    {
      id: 6,
      Icon: FiWind,
      title: 'Wind',
      value: `${weather.wind.speed.toFixed()} km/h`
    },
  ]

  return (
    <>
      <div className='flex justify-center my-6'>
        <p className='text-3xl font-medium'>{`${weather?.name}, ${weather?.sys.country}`}</p>
      </div>

      <div className='flex justify-center my-6'>
        <p className='text-5xl'>{weather?.main.temp.toFixed()}°</p>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-around my-3'>
        <div>
          <img src={`http://www.openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="temperature icon" className='w-25' />
          <p className='text-2xl text-center'>{weather?.weather[0].main}</p>
        </div>
        
        <div className='grid grid-cols-2 gap-4 p-6 border border-secondary rounded-md text-sm shadow-sm bg-slate-50'>
          {
            details.map(({id, Icon, title, value}) => (
              <div key={id} className='flex font-light text-sm items-center justify-center'>
                <Icon size={20} className='mr-1' />
                {`${title}:`}
                <span className='font-medium ml-1'>{value}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TemperatureDetails