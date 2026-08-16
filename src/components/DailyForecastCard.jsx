function DailyForecastCard({
    day,
    icon,
    condition,
    maxTemperature,
    minTemperature
}) {

    return (
        <div className="day-card">

            <p>
                {day}
            </p>

            <div className="day-weather">

                <img
                    className="day-icon"
                    src={`https:${icon}`}
                    alt={condition}
                />

                <span>
                    {condition}
                </span>

            </div>

            <p>
                {maxTemperature}° / {minTemperature}°
            </p>

        </div>
    );
}

export default DailyForecastCard;