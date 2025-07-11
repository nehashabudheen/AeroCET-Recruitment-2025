import React, { useState } from 'react';
import './Weather.css'; // ✅ Import CSS for shimmer effect

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    const apiKey = '4476710c4ee4ad27375514b1c460154e'; //
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&appid=${apiKey}&units=metric`;


    try {
      setLoading(true);
      setError('');
      setWeather(null);
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError('City not found');
      }
    } catch (err) {
      console.error('Error fetching weather:', err);
      setError('Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-page">
      <h2>Check Weather</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && (
        <div className="shimmer-box">
          <div className="shimmer-line title"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
        </div>
      )}

      {!loading && weather && weather.main && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}

      {!loading && error && <p className="error">{error}</p>}
    </div>
  );
};

export default Weather;
