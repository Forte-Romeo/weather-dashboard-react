function HourlyForecast({ weather }) {

    const hours = weather.forecast.forecastday[0].hour;

    return (
        <section className="forecast-card">

            <h3>TODAY'S FORECAST</h3>

            <div className="hourly-forecast">

                {hours
                    .filter((hour, index) => index % 3 === 0)
                    .slice(0, 6)
                    .map((hour) => (

                        <div
                            className="hour-card"
                            key={hour.time}
                        >

                            <p>
                                {new Date(hour.time)
                                    .toLocaleTimeString([], {
                                        hour: "numeric"
                                    })}
                            </p>

                            <img
                                className="forecast-weather-icon"
                                src={`https:${hour.condition.icon}`}
                                alt={hour.condition.text}
                            />

                            <h4>
                                {Math.round(hour.temp_c)}°
                            </h4>

                        </div>
                    ))}
            </div>

        </section>
    );
}

export default HourlyForecast;