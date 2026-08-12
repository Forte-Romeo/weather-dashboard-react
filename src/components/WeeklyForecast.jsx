function WeeklyForecast() {

    const forecast = [
        {
            day: "Today",
            condition: "Sunny",
            icon: "☀️",
            high: "36°",
            low: "22°"
        },
        {
            day: "Tue",
            condition: "Sunny",
            icon: "☀️",
            high: "37°",
            low: "21°"
        },
        {
            day: "Wed",
            condition: "Sunny",
            icon: "☀️",
            high: "37°",
            low: "21°"
        },
        {
            day: "Thu",
            condition: "Cloudy",
            icon: "☁️",
            high: "35°",
            low: "22°"
        },
        {
            day: "Fri",
            condition: "Cloudy",
            icon: "☁️",
            high: "34°",
            low: "22°"
        },
        {
            day: "Sat",
            condition: "Rainy",
            icon: "🌧️",
            high: "32°",
            low: "21°"
        },
        {
            day: "Sun",
            condition: "Storm",
            icon: "⛈️",
            high: "31°",
            low: "20°"
        }
    ];

    return (
        <aside className="weekly-forecast">

            <h3>7-DAY FORECAST</h3>

            <div className="weekly-list">

                {forecast.map((day) => (
                    <div
                        className="day-card"
                        key={day.day}
                    >

                        <p>{day.day}</p>

                        <div className="day-weather">
                            <span className="day-icon">
                                {day.icon}
                            </span>

                            <span>
                                {day.condition}
                            </span>
                        </div>

                        <p>
                            {day.high} / {day.low}
                        </p>

                    </div>
                ))}

            </div>

        </aside>
    );
}

export default WeeklyForecast;