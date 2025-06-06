import "./App.css";
import { useState, useEffect } from "react";
import getWeatherByCoords from "./components/weatherApi";
import WeatherCard from "./components/WeatherCard.jsx";
function App() {
  const [weatherData, setWeatherData] = useState([]);
  const cities = [
    { name: "לונדון", lat: 51.5072, lon: -0.1276 },
    { name: "ניו יורק", lat: 40.7128, lon: -74.006 },
    { name: "אלסקה", lat: 64.2008, lon: -149.4937 },
    { name: "אילת", lat: 29.5581, lon: 34.9482 },
  ];

  // Fetch weather data for all cities
  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        cities.map((city) => getWeatherByCoords(city.lat, city.lon))
      );
      console.log("Weather data fetched:", results);

      setWeatherData(results);
    };

    fetchAll();
  }, []);

  return (
    <div className="App" dir="rtl">
      <h1 className="weather-title">תחזית מסביב לעולם</h1>

      <div className="weather-container">
        {weatherData.map((data, i) => (
          <WeatherCard key={i} {...data} />
        ))}
      </div>
    </div>
  );
}

export default App;
