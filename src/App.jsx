import "./App.css";
import { useState, useEffect } from "react";
import  getWeatherByCoords  from "./components/weatherApi";
import WeatherCard from "./components/WeatherCard.jsx";
function App() {


  const [weatherData, setWeatherData] = useState(null);
  const cities = [
    { name: "אילת", lat: 29.5581, lon: 34.9482 },
    { name: "לונדון", lat: 51.5072, lon: -0.1276 },
    { name: "ניו יורק", lat: 40.7128, lon: -74.006 },
    { name: "אלסקה", lat: 64.2008, lon: -149.4937 },
  ];


  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        cities.map(city =>
          getWeatherByCoords(city.lat, city.lon)
        )
      );
      setWeatherData(results);
    };

    fetchAll();
  }, []);

  return (
    <div className="weather-container">
      {weatherData.map((data, i) => (
        <WeatherCard key={i} {...data} />
      ))}
    </div>
  );
}

export default App;
