import { useState } from "react";

import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import AirConditions from "./components/AirConditions";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {

  const [city, setCity] = useState("Accra")

  return (
    <div className="app-container">

      <Sidebar />
      
      <main className="main-content">
        <SearchBar />

        <CurrentWeather city={city} />

        <HourlyForecast />
        
        <AirConditions />
      </main>

      <WeeklyForecast />

    </div>
  );
}

export default App;