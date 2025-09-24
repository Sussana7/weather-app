function WeatherCard() {
  return (
    <div className="weather-display-container">
      <div className="left-section">
        <img
          src="/assets/images/bg-today-large.svg"
          alt="today background"
        />
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">Feels Like</span>
            <span className="metric-value">18°</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Humidity</span>
            <span className="metric-value">46%</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Wind</span>
            <span className="metric-value">14 km/h</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Precipitation</span>
            <span className="metric-value">0 mm</span>
          </div>
        </div>

        <div className="daily-forecast">
          <h3 className="forecast-title">Daily forecast</h3>
          <div className="daily-forecast-grid">
            <div className="daily-forecast-card">
              <span className="day">Tue</span>
              <img src="/assets/images/icon-rain.webp" alt="rain icon" />
              <div className="temperature-range">
                <span className="temp-high">20°</span>
                <span className="temp-low">14°</span>
              </div>
            </div>
            <div className="daily-forecast-card">
              <span className="day">Wed</span>
              <img
                src="/assets/images/icon-drizzle.webp"
                alt="drizzle icon"
              />
              <div className="temperature-range">
                <span className="temp-high">21°</span>
                <span className="temp-low">15°</span>
              </div>
            </div>
            <div className="daily-forecast-card">
              <span className="day">Thu</span>
              <img src="/assets/images/icon-sunny.webp" alt="sunny icon" />
              <div className="temperature-range">
                <span className="temp-high">24°</span>
                <span className="temp-low">14°</span>
              </div>
            </div>
            <div className="daily-forecast-card">
              <span className="day">Fri</span>
              <img
                src="/assets/images/icon-partly-cloudy.webp"
                alt="partly icon"
              />
              <div className="temperature-range">
                <span className="temp-high">25°</span>
                <span className="temp-low">13°</span>
              </div>
            </div>
            <div className="daily-forecast-card">
              <span className="day">Sat</span>
              <img
                src="/assets/images/icon-storm.webp"
                alt="storm icon"
              />
              <div className="temperature-range">
                <span className="temp-high">21°</span>
                <span className="temp-low">15°</span>
              </div>
            </div>
            <div className="daily-forecast-card">
              <span className="day">Sun</span>
              <img src="/assets/images/icon-snow.webp" alt="snow icon" />
              <div className="temperature-range">
                <span className="temp-high">25°</span>
                <span className="temp-low">16°</span>
              </div>
            </div>
            <div className="daily-forecast-card">
              <span className="day">Mon</span>
              <img src="/assets/images/icon-fog.webp" alt="fog icon" />
              <div className="temperature-range">
                <span className="temp-high">24°</span>
                <span className="temp-low">15°</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="hourly-nav">
          <h3 className="hourly-title">Hourly forecast</h3>
          <div className="day-dropdown"></div>
        </div>

        <div className="hourly-forecast-list">
          <div className="hourly-item">
            <img
              src="/assets/images/icon-overcast.webp"
              alt="overcast icon"
            />
            <span className="hour">3 PM</span>
            <span className="temp">20°</span>
          </div>
          <div className="hourly-item">
            <img
              src="/assets/images/icon-partly-cloudy.webp"
              alt="partly cloudy"
            />
            <span className="hour">4 PM</span>
            <span className="temp">20°</span>
          </div>
          <div className="hourly-item">
            <img src="/assets/images/icon-sunny.webp" alt="sunny icon" />
            <span className="hour">5 PM</span>
            <span className="temp">20°</span>
          </div>
          <div className="hourly-item">
            <img
              src="/assets/images/icon-overcast.webp"
              alt="overcast icon"
            />
            <span className="hour">6 PM</span>
            <span className="temp">19°</span>
          </div>
          <div className="hourly-item">
            <img src="/assets/images/icon-snow.webp" alt="snow icon" />
            <span className="hour">7 PM</span>
            <span className="temp">18°</span>
          </div>
          <div className="hourly-item">
            <img src="/assets/images/icon-fog.webp" alt="fog icon" />
            <span className="hour">8 PM</span>
            <span className="temp">18°</span>
          </div>
          <div className="hourly-item">
            <img src="/assets/images/icon-snow.webp" alt="snow icon" />
            <span className="hour">9 PM</span>
            <span className="temp">17°</span>
          </div>
          <div className="hourly-item">
            <img
              src="/assets/images/icon-overcast.webp"
              alt="overcast icon"
            />
            <span className="hour">10 PM</span>
            <span className="temp">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
