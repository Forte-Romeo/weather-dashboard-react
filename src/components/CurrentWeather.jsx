function CurrentWeather({ city }) {
    return (
        <section className="current-weather">
            
            <div className="weather-info">
                <h1>{city}</h1>
                <p className="rain-chance">
                    Chance of rain: 20%
                </p>
                <h2>31°</h2>
            </div>

            <div className="weather-icon">
                <img 
                    src="https://openweathermap.org/img/wn/01d@4x.png" 
                    alt="Sunny Weather" 
                />
            </div>
            
        </section>
    );
}

export default CurrentWeather;