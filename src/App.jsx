import React from 'react'
import PopularCities from './components/PopularCities'
import Input from './components/Input'
import TemperatureDetails from './components/TemperatureDetails'
import Forecast from './components/Forecast'
import { useSelector } from 'react-redux'
import { TailSpin } from 'react-loader-spinner'

const App = () => {

  const { weather, forecast, loading, error } = useSelector((state) => state.weather);

  return (
    <div className='container mx-auto py-6 px-2 xl:max-w-screen-lg'>
      <h1 className='text-primary font-bold text-4xl text-center'>Weather App</h1>
      <PopularCities />
      <Input />
      {
        loading && 
          <div className='flex justify-center py-5'>
            <TailSpin
              visible={true}
              height="60"
              width="60"
              color="#ec6e4c"
              radius="1"
            />
          </div>
      }
      {
        weather && !loading && <TemperatureDetails weather={weather} />
      }
      {
        forecast && !loading && <Forecast forecast={forecast} />
      }
      {
        error && <div>{error}</div>
      }
    </div>
  )
}

export default App