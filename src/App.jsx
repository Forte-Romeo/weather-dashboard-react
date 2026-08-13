import { useState } from "react";

import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import AirConditions from "./components/AirConditions";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {

  const [city, setCity] = useState("Accra");
  const [weather, setWeather] = useState({
    temperature: 31,
    feelsLike: 32,
    humidity: 78,
    windSpeed: 4.2,
    uvIndex: 6,
    rainChance: 20,
    condition: "Sunny",
    icon: "☀️"
  })

  return (
    <div className="app-container">

      <Sidebar />
      
      <main className="main-content">
        <SearchBar onSearch={setCity} />

        <CurrentWeather city={city} weather={weather}/>

        <HourlyForecast />
        
        <AirConditions />
      </main>

      <WeeklyForecast />

    </div>
  );
}

export default App;