function HourlyForecast() {

    const forecast = [
        {
            time: "6:00 AM",
            temperature: "25°",
            icon: "☁️"
        },
        {
            time: "9:00 AM",
            temperature: "28°",
            icon: "🌤️"
        },
        {
            time: "12:00 PM",
            temperature: "31°",
            icon: "☀️"
        },
        {
            time: "3:00 PM",
            temperature: "33°",
            icon: "☀️"
        },
        {
            time: "6:00 PM",
            temperature: "30°",
            icon: "🌤️"
        },
        {
            time: "9:00 PM",
            temperature: "27°",
            icon: "☁️"
        },
    ];

    return (
        <section className="forecast-card">

            <h3>TODAY'S FORECAST</h3>

            <div className="hourly-forecast">

                {forecast.map((hour) => (
                    <div 
                        className="hour-card"
                        key={hour.time}
                    >
                        
                        <p>{hour.time}</p>
                        <span className="forecast-icon">
                            {hour.icon}
                        </span>
                        <h4>{hour.temperature}</h4>

                    </div>
                ))}
                
            </div>

        </section>
    );
}

export default HourlyForecast;