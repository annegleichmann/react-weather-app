import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tampere" />

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
