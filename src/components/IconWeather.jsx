import React from "react";
import "./IconWeather.css";

const IconWeather = ({ codIcon }) => {
  let url = "http://openweathermap.org/img/w/";
  let iconUrl = url + codIcon + ".png";
  console.log(iconUrl);
  return (
    <div className="iconImg">
      <img src={iconUrl} alt="" />
    </div>
  );
};

export default IconWeather;
