import HourlyWeatherCard from "./HourlyWeatherCard";

function HourlyForecast({ weather }) {

    const hours = weather.forecast.forecastday[0].hour;

    const selectedHours = hours
        .filter((hour, index) => index % 3 === 0)
        .slice(0, 6); 

    return (
        <section className="forecast-card">

            <h3>TODAY'S FORECAST</h3>

            <div className="hourly-forecast">

                {selectedHours.map((hour) => (
                    <HourlyWeatherCard
                        key={hour.time}
                        time={new Date(hour.time)
                            .toLocaleTimeString([], {
                                hour: "numeric"
                            })}
                        icon={hour.condition.icon}
                        temperature={Math.round(hour.temp_c)}
                        condition={hour.condition.text}
                    />
                ))}
            </div>

        </section>
    );
}

export default HourlyForecast;