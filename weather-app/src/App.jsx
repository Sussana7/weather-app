import "./App.css";
import "./styles/reset.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2 className="main-title">How's the sky looking today?</h2>
        <SearchSection />
        <WeatherCard />
      </main>
    </div>
  );
}

export default App;
