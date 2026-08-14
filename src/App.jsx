import { useEffect, useState } from "react";

import { getWeather } from "./services/weatherApi";

import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import AirConditions from "./components/AirConditions";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {

  const [city, setCity] = useState("Accra");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
    async function fetchWeather() {
      
      try {
        setLoading(true);
        setError("");

        const data =await getWeather(city);
        setWeather(data);
      } 
      
      catch (error) {
        setError(error.message);
      } 
      
      finally {
        setLoading(false);
      }

    }

    fetchWeather();
  }, [city]);

  return (
    <div className="app-container">

      <Sidebar />
      
      <main className="main-content">
        <SearchBar onSearch={setCity} />

        {loading && (
          <p>Loading weather...</p>
        )}

        {error && (
          <p>{error}</p>
        )}

        {weather && !loading && !error && (
          <>
            <CurrentWeather weather={weather}/>

            <HourlyForecast weather={weather}/>
        
            <AirConditions weather={weather} />
          </>
        )}
      </main>

      {weather && !loading && !error && (
        <WeeklyForecast weather={weather}/>
      )}

    </div>
  );
}

export default App;