import "./App.css";
import "./styles/reset.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import WeatherCard from "./components/WeatherCard";

import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Weather data state updated:", weatherData);
  }, [weatherData]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = {
          latitude: 52.52,
          longitude: 13.41,
          hourly: "temperature_2m",
        };

        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);

        const response = responses[0];

        const latitude = response.latitude();
        const longitude = response.longitude();
        const elevation = response.elevation();
        const utcOffsetSeconds = response.utcOffsetSeconds();

        console.log(
          `\nCoordinates: ${latitude}°N ${longitude}°E`,
          `\nElevation: ${elevation}m asl`,
          `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`
        );

        const hourly = response.hourly();

        const processedWeatherData = {
          coordinates: { latitude, longitude, elevation },
          utcOffsetSeconds,
          hourly: {
            time: [
              ...Array(
                (Number(hourly.timeEnd()) - Number(hourly.time())) /
                  hourly.interval()
              ),
            ].map(
              (_, i) =>
                new Date(
                  (Number(hourly.time()) +
                    i * hourly.interval() +
                    utcOffsetSeconds) *
                    1000
                )
            ),
            temperature_2m: hourly.variables(0).valuesArray(),
          },
        };

        console.log("\nHourly data", processedWeatherData.hourly);
        console.log(processedWeatherData)
        setWeatherData(processedWeatherData);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []); 

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <h2 className="main-title">Loading weather data...</h2>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <ErrorState />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2 className="main-title">How's the sky looking today?</h2>
        <SearchSection />
        <WeatherCard weatherData={weatherData} />
      </main>
    </div>
  );
}

export default App;
