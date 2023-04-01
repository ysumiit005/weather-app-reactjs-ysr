import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const api = {
  key: "9ab4c270f214cdbe0e7131c876d5e821",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});


  const searchPressed = () => {
    console.log("search pressed");
    console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    console.log(weather.main),
    <div className="App">
      <header className="App-header">
        {/* Header */}
        <h1>Weather App by YSR</h1>

        {/* Search box */}
        <div>
          <input
            type="text"
            placeholder="Enter city/Town...."
            onChange={(e) => setSearch(e.target.value)}
            className="input-box"
          />
          <button onClick={searchPressed} className="search-button">
            Search
          </button>
        </div>

        <br></br>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div className="data">
            {/* Location */}
            <p>Location : {weather.name}</p>

            {/* Temp F/C */}
            <p>Temperature : {weather.main.temp} F</p>

            {/* Condition [Sunny] */}
            <p>Condition : {weather.weather[0].main}</p>
            <p>Descr : ( {weather.weather[0].description} )</p>
          </div>
        ) : (
          <div className="data">Location not found </div>
        )}
      </header>
    </div>
  );
}

export default App;
