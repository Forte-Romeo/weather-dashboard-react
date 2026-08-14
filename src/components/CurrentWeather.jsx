function CurrentWeather({ weather }) {

    const { location, current } = weather;

    return (
        <section className="current-weather">
            
            <div className="weather-info">
                <h1>{location.name}</h1>
                <p className="rain-chance">
                    Chance of rain: {current.condition.text}
                </p>
                <h2>{Math.round(current.temp_c)}°</h2>
            </div>

            <div className="weather-icon">
                <img 
                    src={`https:${current.condition.icon}`}
                    alt={current.condition.text} 
                />
            </div>
            
        </section>
    );
}

export default CurrentWeather;