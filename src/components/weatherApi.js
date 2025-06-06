const API_KEY = ***REMOVED***;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetches weather data for a given latitude and longitude.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @returns {Promise<Object>} Weather data including name, description, temperature, feels like, humidity, and icon.
 */
const getWeatherByCoords = async (lat, lon) => {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=he`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    icon: data.weather[0].icon
  };
};
export default getWeatherByCoords;
