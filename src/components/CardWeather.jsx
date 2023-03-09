import React, { useState, useEffect } from "react";
import IconWeather from "./IconWeather.jsx";
import axios from "axios";
import "./CardWeather.css";

const CardWeather = () => {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${loadCity}&appid=edbc362850b90931b843e8acbfe9cc41&lang=es`;
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=lima&appid=edbc362850b90931b843e8acbfe9cc41&lang=es`;
  const loadUrlWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=edbc362850b90931b843e8acbfe9cc41&lang=es`;
    try {
      const res = await axios.get(url);
      setWeather(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    loadUrlWeather();
  }, [lat, lon]);

  return (
    <div className="cardContainer">
      {weather && (
        <div>
          <div className="textContainer">
            <p>{(weather.main.temp - 273.5).toFixed(1)}°</p>
            <small>Viento: {weather.wind.speed}</small>
            <small>Nuves: {weather.clouds.all}</small>
            <small>Presión: {weather.wind.deg}</small>
            <h3>
              {weather.name}, {weather.sys.country}
            </h3>
          </div>
          <div className="imgContainer">
            <div>
              <IconWeather codIcon={weather.weather[0].icon} />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardWeather;
