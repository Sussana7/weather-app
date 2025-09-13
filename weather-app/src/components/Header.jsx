function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/logo.svg" alt="Weather Now" />
      </div>
      <button className="units-btn">
        <img src="/assets/images/icon-units.svg" alt="units" />
        <span>Units</span>
      </button>
    </header>
  )
}

export default Header;