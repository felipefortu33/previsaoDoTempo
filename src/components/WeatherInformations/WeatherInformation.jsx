import './WeatherInformation.css'


function WeatherInformation({ weather }) {  
    if (!weather || !weather.main || !weather.weather) {
        return null;
    }

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>

            <div className='weader-info'>
                <img 
                    src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}.png`} 
                    alt="Weather Icon"
                />
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>

            <div>
                <p className='description'>{weather.weather[0]?.description}</p>
            </div>

            <div className='detail'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    );
}

export default WeatherInformation;
