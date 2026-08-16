import DailyForecastCard from "./DailyForecastCard";

function WeeklyForecast({ weather }) {

    const forecastDays = weather.forecast.forecastday;

    return (
        <aside className="weekly-forecast">

            <h3>7-DAY FORECAST</h3>

            <div className="weekly-list">

                {forecastDays.map((day, index) => {

                    const dayName =
                        index === 0
                            ? "Today"
                            : new Date(day.date)
                                .toLocaleDateString(
                                    "en-US",
                                    {
                                        weekday: "short"
                                    }
                                );

                    return (

                        <DailyForecastCard
                            key={day.date}
                            day={dayName}
                            icon={day.day.condition.icon}
                            condition={day.day.condition.text}
                            maxTemperature={Math.round(
                                day.day.maxtemp_c
                            )}
                            minTemperature={Math.round(
                                day.day.mintemp_c
                            )}
                        />

                    );

                })}

            </div>

        </aside>
    );
}

export default WeeklyForecast;