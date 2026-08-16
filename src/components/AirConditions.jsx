import WeatherMetric from "./WeatherMetric";

function AirConditions({ weather }) {

    const { current } = weather;

    const conditions = [
        {
            icon: "🌡️",
            label: "Real Feel",
            value: `${Math.round(current.feelslike_c)}°`
        },
        {
            icon: "💨",
            label: "Wind",
            value: `${current.wind_kph} km/h`
        },
        {
            icon: "💧",
            label: "Humidity",
            value: `${current.humidity}%`
        },
        {
            icon: "☀️",
            label: "UV Index",
            value: current.uv
        }
    ];

    return (
        <section className="air-conditions">
            <div className="section-header">
                <h3>AIR CONDITIONS</h3>
                <button className="see-more-btn">
                    See More
                </button>
            </div>
            
            <div className="conditions-grid">
                {conditions.map((condition) =>(
                    <WeatherMetric
                        key={condition.label}
                        icon={condition.icon}
                        label={condition.label}
                        value={condition.value}
                    />
                ))}
            </div>
            
        </section>
    );
}

export default AirConditions;