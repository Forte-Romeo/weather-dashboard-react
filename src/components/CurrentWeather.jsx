function CurrentWeather({ weather }) {

    const { location, current } = weather;

    const temperature = Math.round(current.temp_c);

    const condition = current.condition.text;

    return (
        <section className="current-weather">
            
            <div className="weather-info">
                <h1>{location.name}</h1>
                <p className="rain-chance">
                    Condition: {condition}
                </p>
                <h2>{temperature}°</h2>
            </div>

            <div className="weather-icon">
                <img 
                    src={`https:${current.condition.icon}`}
                    alt={condition} 
                />
            </div>
            
        </section>
    );
}

export default CurrentWeather;