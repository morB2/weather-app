import React from "react";
import "./WeatherCard.css";

/**
 * WeatherCard component displays weather information for a specific location.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - Name of the city.
 * @param {string} props.description - Weather description.
 * @param {number} props.temp - Current temperature in Celsius.
 * @param {number} props.feels_like - Feels like temperature in Celsius.
 * @param {number} props.humidity - Humidity percentage.
 * @param {string} props.icon - Weather icon code from OpenWeatherMap.
 * @return {JSX.Element} Rendered WeatherCard component.
 **/
const WeatherCard = ({
  name,
  description,
  temp,
  feels_like,
  humidity,
  icon,
}) => {
  return (
    <div className="weather-card">
      <div className="card-header">
        <div className="weather-location">
          <div className="city-name">{name}</div>
          <div className="weather-description">{description}</div>
        </div>

        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
      <div className="card-values">
        <div className="value-block">
          <div className="label">טמפ' נמדדת</div>
          <div className="value">{Math.round(temp)}°C</div>
        </div>
        <div className="value-block">
          <div className="label">טמפ' מורגשת</div>
          <div className="value">{Math.round(feels_like)}°C</div>
        </div>
        <div className="value-block">
          <div className="label">לחות</div>
          <div className="value">{humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
