function AirConditions() {

    const conditions = [
        {
            icon: "🌡️",
            label: "Real Feel",
            value: "32°"
        },
        {
            icon: "💨",
            label: "Wind",
            value: "4.2 km/h"
        },
        {
            icon: "💧",
            label: "Humidity",
            value: "78%"
        },
        {
            icon: "☀️",
            label: "UV Index",
            value: "6"
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
                    <div 
                        className="condition-card"
                        key={condition.label}
                    >

                        <div className="condition-title">
                            <span>
                                {condition.icon}
                            </span>

                            <span>
                                {condition.label}
                            </span>
                        </div>

                        <h4>
                            {condition.value}
                        </h4>

                    </div>
                ))}
            </div>
            
        </section>
    );
}

export default AirConditions;