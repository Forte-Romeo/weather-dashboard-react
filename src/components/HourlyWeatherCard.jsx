function HourlyWeatherCard({ time, icon, temperature, condition }) {
    
    return (
        <div className="hour-card">
            <p>{time}</p>

            <img 
                src={`https:${icon}`} 
                alt={condition} 
                className="forecast-weather-icon" 
            />

            <h4>{temperature}°</h4>
        </div>
    );
}

export default HourlyWeatherCard;