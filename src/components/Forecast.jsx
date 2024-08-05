import React from 'react'
import formatToLocalTime from '../utils/Time';

const Forecast = ({ forecast }) => {

  const dailyForecast = forecast?.list
    .filter((f) => f.dt_txt.slice(-8) === '00:00:00')
    .map((item) => ({
      temp: item.main.temp.toFixed(),
      title: formatToLocalTime(item.dt, forecast?.city.timezone, 'ccc'),
      icon: `http://www.openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      date: item.dt_txt
    }))

  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>5 day forecast</p>
      </div>

      <hr className='my-1' />

      <div className='flex items-center justify-between'>
        {
          dailyForecast.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>{item.title}</p>
              <img src={item.icon} alt="" />
              <p className='w-12 my-1 text-center'>{item.temp}°</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Forecast