import React, { useState } from "react";
import "./Weather.css";
import Swal from "sweetalert2";
import Icons from "./Icons";

const Weather = ({ weather, temp , icon}) => {
  const [isCelcius, setIsCelcius] = useState(true);

  const changeUnitTemp = () => {
    setIsCelcius(!isCelcius);
  };

  const buttonSearch = () => {
    Swal.fire({
      imageUrl:
        "https://github.com/Sridhar-C-25/weather_app_react_tailwind/blob/main/src/assets/NotFound.png?raw=true",
      imageWidth: 200,
      imageHeight: 200,
      text: "NOT FOUND ☢️",
      imageAlt: "Sorry 😓",
    });
  };

  return (
    <section>
      <section className="container">
        <div className="flex justify-between p-3 items-center">
          <h2 className="section-searh flex items-center text-center">
            <span className="flex text-center text-[23px]">
              <ion-icon name="compass-outline"></ion-icon>
            </span>
            <span className="p-2 uppercase">
              {weather.name} , {weather.sys.country}{" "}
            </span>
          </h2>

          <span className="search text-[22px] ">
            <ion-icon
              onClick={() => buttonSearch()}
              name="search-outline"
            ></ion-icon>
          </span>
        </div>
        {/* Icono animado */}
        <div className=" ">
          <Icons icon={icon} />
        </div>
        <article className="">
          {/* Icono estatico / Lo logre normal tambien  */}
          {/* <div className=" flex justify-center h-40 ">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            /> 
          </div> */}

          <div className=" pb-2 ">
            <h2 className=" text-[2.2rem] font-bold">
              <span className="text-[1.8rem] text-center ">
                <ion-icon name="thermometer-outline"></ion-icon>
              </span>{" "}
              {isCelcius ? `${temp.celsius} °ᶜ ` : `${temp.fahrenheit} °ᶠ `}{" "}
            </h2>
          </div>

          <h3 className="text-slate-300 text-[1.3rem]  pb-6 capitalize font-semibold">
            {" "}
            {weather.weather[0].description}{" "}
          </h3>
        </article>

        <article className="flex justify-around items-center flex-wrap p-2">
          <div className="box-clima flex">
            <div className=""></div>
            <div>
              <img className="" src="/images/wind.png" alt="" />
            </div>
            <h5 className=" px-2  text-[1.7rem]"> {weather.wind.speed} m/s </h5>
          </div>

          <div className="box-clima flex ">
            <div>
              <img className="" src="/images/humidity.png" alt="" />
            </div>
            <h5 className=" px-2 text-[1.6rem]">{weather.main.humidity} % </h5>
          </div>

          <div className=" box-clima flex">
            <div className="">
              <img className="" src="/images/pressure.png" alt="" />
            </div>
            <h5 className=" px-2 text-[1.6rem] first-letter: ">
              {weather.main.humidity} °C | °F{" "}
            </h5>
          </div>
        </article>
      </section>
      <div className="pt-5 button-change">
        <button
          onClick={changeUnitTemp}
          className="bg_1 py-2 px-6 text-white font-bold rounded-full hover:bg-blue-300 duration-200"
        >
          Change °C/°F{" "}
        </button>
      </div>
    </section>
  );
};

export default Weather;
