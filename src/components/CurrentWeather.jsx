function CurrentWeather({ city, weather }) {
    return (
        <section className="current-weather">
            
            <div className="weather-info">
                <h1>{city}</h1>
                <p className="rain-chance">
                    Chance of rain: {weather.rainChance}%
                </p>
                <h2>{weather.temperature}°</h2>
            </div>

            <div className="weather-icon">
                {weather.icon}
            </div>
            
        </section>
    );
}

export default CurrentWeather;