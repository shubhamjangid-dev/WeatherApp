import React from "react";

function Forcast({ data, head }) {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="w-full justify-center">
      <div className="w-full text-md">{head === "day" ? `${day[new Date(data.dt * 1000).getDay()]}` : `${new Date((data.dt + 1800) * 1000).toTimeString().slice(0, 5)}`}</div>
      <div className="w-2/3 flex mx-auto">
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
      </div>
      <div className="w-full text-md">{Math.trunc(data.main.temp)}&deg;</div>
    </div>
  );
}

export default Forcast;
