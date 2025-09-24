import Header from "./Header";
import SearchSection from "./SearchSection";

function LoadingState() {
  return (
    <div>
      <Header />
      <SearchSection />
      <div className="left-section">
        <img src="" />
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">Feels Like</span>
            <span className="metric-value"></span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Humidity</span>
            <span className="metric-value"></span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Wind</span>
            <span className="metric-value"></span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Precipitation</span>
            <span className="metric-value"></span>
          </div>
        </div>
      </div>

      <div className="daily-forecast">
        <h3 className="forecast-title">Daily forecast</h3>
        <div className="daily-forecast-grid">
          <div className="daily-forecast-card">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingState;

<div className="right-section">
  <div className="hourly-nav">
    <h3 className="hourly-title">Hourly forecast</h3>
    <div className="day-dropdown">
      <img src="/assets/images/icon-dropdown.svg" alt="dropdown-icon" />
    </div>
  </div>

  <div className="hourly-forecast-list">
    <div className="hourly-item">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</div>;
