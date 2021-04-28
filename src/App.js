import './App.css';
import React, { useState } from 'react';


const api = {
  key: "438b2de9cb71e545177689ddeb99ba7d",
  base: "https://api.openweathermap.org/data/2.5/"
};
function App() {

  const [query,setQuery]= useState();
  const [weather,setWeather] = useState({});
  const search = e => {
    if (e.key=== "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May","June","July","August",
    "September","October","November","December"];
    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day= days[d.getDay()];
    let date= d.getDate();
    let month= months[d.getMonth()];
    let year= d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <>
    <div className={
      (typeof weather.main != "undefined")
      ? ((weather.main.temp < 15) ? 'app cold' : 'app' ) : 'app cold'
} >
      <main>
        <div className="search-box">
          <input 
          type="text"
          placeholder="Search.."
          className="search-bar"
          onChange={ e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != 'undefined')? (
          <div>
          <div className="location-box">
            <div className="location">{weather.name} ,{weather.sys.country}</div>
            <div className="data">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="weather">{weather.weather[0].description}</div>
            <div className="temp">Temperature : {Math.round(weather.main.temp)}°C</div>
            <div className="temp1">Feels like {Math.round(weather.main.feels_like)}°C </div>
           
          </div>
          </div>
        ) : ('')}
        
          
      </main>
    </div>
    </>
  );
}

export default App;