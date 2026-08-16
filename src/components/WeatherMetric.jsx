function WeatherMetric ({ icon, label, value }) {

    return (
        <div className="condition-card">

            <div className="condition-title">
                <span>{icon}</span>
                <span>{label}</span>
            </div>

            <h4>{value}</h4>

        </div>
    );
}

export default WeatherMetric;