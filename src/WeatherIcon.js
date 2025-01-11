import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY_DAY",
    "03n": "CLOUDY_NIGHT",
    "04d": "SHOWER_RAIN_DAY",
    "04n": "SHOWER_RAIN_NIGHT",
    "05d": "RAIN_DAY",
    "05n": "RAIN_NIGHT",
    "06d": "THUNDERSTORM_DAY",
    "06n": "THUNDERSTORM_NIGHT",
    "07d": "SNOW_DAY",
    "07n": "SNOW_NIGHT",
    "08d": "FOG_DAY",
    "08n": "FOG_NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={props.size}
      animate={true}
    />
  );
}
