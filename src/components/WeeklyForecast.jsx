function WeeklyForecast({ weather }) {

    const forecastDays = weather.forecast.forecastday;

    return (
        <aside className="weekly-forecast">

            <h3>7-DAY FORECAST</h3>

            <div className="weekly-list">

                {forecastDays.map((day, index) => (
                    <div
                        className="day-card"
                        key={day.date}
                    >
                        <p>
                            {index === 0
                                ? "Today"
                                : new Date(day.date)
                                    .toLocaleDateString(
                                        "en-US",
                                        {
                                            weekday: "short"
                                        }
                                    )
                            }
                        </p>

                        <div className="day-weather">
                            <img
                                className="day-icon"
                                src={`https:${day.day.condition.icon}`}
                                alt={day.day.condition.text}
                            />

                            <span>
                                {day.day.condition.text}
                            </span>
                        </div>

                        <p>
                            {Math.round(day.day.maxtemp_c)}°
                            {" / "}
                            {Math.round(day.day.mintemp_c)}°
                        </p>

                    </div>
                ))}

            </div>

        </aside>
    );
}

export default WeeklyForecast;