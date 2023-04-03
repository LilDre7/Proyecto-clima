import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

function App() {
  const [coords, setcoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const success = (pos) => {
    const currentCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    setcoords(currentCoords);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=a2f79c79e7059cd99b1e5588a32ac73c`;

      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const fahrenheit = (celsius * (9/5)  + 32).toFixed(1)
          const newTemps = {
            celsius,
            fahrenheit
          };
          setTemp(newTemps)
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);



  return (
  <div className="App flex justify-center items-center min-h-screen text-center">
      {weather ? <Weather temp={temp} weather={weather}/> : <Loader /> }
    </div>
  );
}

export default App;
