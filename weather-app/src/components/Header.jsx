import { useState } from 'react'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/logo.svg" alt="Weather Now" />
      </div>
      
      <div className="units-container">
        <button className="units-btn" onClick={toggleDropdown}>
          <img src="/assets/images/icon-units.svg" alt="units" />
          <span>Units</span>
        </button>
        
        {isDropdownOpen && (
          <div className="units-dropdown">
            <h3>Switch to Imperial</h3>
            <p>Temperature</p>
            <p>Celsius (°C)</p>
            <p>Fahrenheit (°F)</p>
            <p>Wind Speed</p>
            <p>km/h</p>
            <p>mph</p>
            <p>Precipitation</p>
            <p>Millimeters (mm)</p>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;