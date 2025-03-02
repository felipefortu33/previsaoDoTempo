import { useState, useRef } from 'react';
import axios from 'axios';
import WeatherInformation from './components/WeatherInformations/WeatherInformation';
import WeatherInformation5Days from './components/WeatherInformation5Days/WeatherInformation5Days';
import './App.css'

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "a885e4e8db14fba170c8cbcc028520e8";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Day);

    setWeather5Days(apiInfo5Days.data);
    setWeather(apiInfo.data);
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformation weather={weather} />}
      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
