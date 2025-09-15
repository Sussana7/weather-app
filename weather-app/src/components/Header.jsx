import { useState } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTemp, setSelectedTemp] = useState("celsius");
  const [selectedWind, setSelectedWind] = useState("kmh");
  const [selectedPrecip, setSelectedPrecip] = useState("mm");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to switch all units to Imperial
  const switchToImperial = () => {
    setSelectedTemp("fahrenheit");
    setSelectedWind("mph");
    setSelectedPrecip("inches");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/logo.svg" alt="Weather Now" />
      </div>

      <div className="units-container">
        <button className="units-btn" onClick={toggleDropdown}>
          <img src="/assets/images/icon-units.svg" alt="units" />
          <span>Units</span>
          <img src="/assets/images/icon-dropdown.svg" alt="arrow down" />
        </button>

        {isDropdownOpen && (
          <div className="units-dropdown">
            <button className="imperial-switch" onClick={switchToImperial}>
              Switch to Imperial
            </button>
            
            <p className="unit-category">Temperature</p>
            <button className="unit-option" onClick={() => setSelectedTemp("celsius")}>
              Celsius (°C) 
              {selectedTemp === "celsius" && (
                <img src="/assets/images/icon-checkmark.svg" alt="selected" />
              )}
            </button>
            <button className="unit-option" onClick={() => setSelectedTemp("fahrenheit")}>
              Fahrenheit (°F) 
              {selectedTemp === "fahrenheit" && (
                <img src="/assets/images/icon-checkmark.svg" alt="selected" />
              )}
            </button>
            
              <div className="separator"></div> 

            <p className="unit-category">Wind Speed</p>
            <button className="unit-option" onClick={() => setSelectedWind("kmh")}>
              km/h 
              {selectedWind === "kmh" && (
                <img src="/assets/images/icon-checkmark.svg" alt="selected" />
              )}
            </button>
            <button className="unit-option" onClick={() => setSelectedWind("mph")}>
              mph 
              {selectedWind === "mph" && (
                <img src="/assets/images/icon-checkmark.svg" alt="selected" />
              )}
            </button>

            <div className="separator"></div> 
            
            <p className="unit-category">Precipitation</p>
            <button className="unit-option" onClick={() => setSelectedPrecip("mm")}>
              Millimeters (mm) 
              {selectedPrecip === "mm" && (
                <img src="/assets/images/icon-checkmark.svg" alt="selected" />
              )}
            </button>
            <button className="unit-option" onClick={() => setSelectedPrecip("inches")}>
              Inches (in) 
              {selectedPrecip === "inches" && (
                <img src="/assets/images/icon-checkmark.svg" alt="selected" />
              )}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;