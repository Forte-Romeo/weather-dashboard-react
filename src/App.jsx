import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import AirConditions from "./components/AirConditions";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <Sidebar />
      
      <main className="main-content">
        <SearchBar />
        <CurrentWeather />
        <HourlyForecast />
        <AirConditions />
      </main>

      <WeeklyForecast />

    </div>
  );
}

export default App;