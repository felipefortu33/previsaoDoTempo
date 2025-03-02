import './WeatherInformation5Days.css';

function WeatherInformation5Days({ weather5Days }) { 
    console.log(weather5Days);

    let dailyForecast = {};
    
    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 5);

    function convertDate(date) {
        return new Date(date.dt * 1000).toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            day: '2-digit' 
        });
    }

    return (
        <div className="weather-container">
            <h3>Previsão dos próximos 4 dias</h3>
            <div className='weather-list'>
            {next5DaysForecast.map(forecast => (
                <div key={forecast.dt} className='weather-item'>
                    <p className='forecast-day'>{convertDate(forecast)}</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${forecast.weather[0]?.icon}.png`} 
                        alt="Weather Icon"
                    />
                    <p className='forecast-description'>{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
                </div> 
            ))}

</div>
        </div>
    );
}

export default WeatherInformation5Days;
