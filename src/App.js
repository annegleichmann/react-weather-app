import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/dashboard"
            rel="noreferrer"
            target="_blank"
          >
            Anne Gleichmann
          </a>
          , open sourced on{" "}
          <a
            href="https://github.com/annegleichmann/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
