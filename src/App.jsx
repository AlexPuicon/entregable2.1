import axios from "axios";
import React, { useState, useEffect } from "react";
import { IconWeather } from "./assets/IconWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("lima");
  const [weather, setWeather] = useState(null);
  const headelSubmit = (event) => {
    event.preventDefault();
    const inputTarget = event.target.idInput;
    setCity(inputTarget.value);
    if (city === "" || !city) return;
    console.log(inputTarget.value);
  };
  function loadurl() {
    const keyWeather = "edbc362850b90931b843e8acbfe9cc41";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyWeather}`;
    console.log(url);
    return url;
  }

  const loadUrlWeather = async () => {
    try {
      const rem = await axios.get(loadurl());
      setWeather(rem.data);
      console.log(rem.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUrlWeather();
  }, [city]);

  return (
    <div className="App">
      <div className="containetForm">
        <p>Weather app</p>
        <form onSubmit={headelSubmit}>
          <div className="InputContainer">
            <input
              type="text"
              className="inputFrom"
              placeholder="Type of city"
              id="idInput"
            />
            <button className="btnFrom" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      {weather && (
        <div className="cardContainer">
          <div>
            <div className="textWeather">
              <p>{(weather.main.temp - 273.5).toFixed(1)}°</p>
              <small>Viento: {weather.wind.speed}</small>
              <small>Nuves: {weather.clouds.all}</small>
              <small>Presión: {weather.wind.deg}</small>
            </div>
            <div className="imgWeather">{}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
