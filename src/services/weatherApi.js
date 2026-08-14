const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getWeather (city) {
    
    const url =
        `${BASE_URL}/forecast.json` +
        `?key=${API_KEY}` +
        `&q=${encodeURIComponent(city)}` +
        `&days=7` +
        `&api=no` +
        `&alerts=no`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Unable to fetch weather data.")
    }

    const data = await response.json();

    return data;
}