import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ name, description, temp, feels_like, humidity, icon }) => {
  return (
    <div className="weather-card" >
      <div className="card-header">
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div className="weather-location">
          <div className="city-name">{name}</div>
          <div className="weather-description">{description}</div>
        </div>
      </div>
      <div className="card-values">
        <div className="value-block">
          <div className="value">{temp}°C</div>
          <div className="label">טמפ' נמדדת</div>
        </div>
        <div className="value-block">
          <div className="value">{feels_like}°C</div>
          <div className="label">טמפ' מורגשת</div>
        </div>
        <div className="value-block">
          <div className="value">{humidity}%</div>
          <div className="label">לחות</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
