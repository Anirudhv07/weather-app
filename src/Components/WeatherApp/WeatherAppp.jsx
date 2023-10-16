import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

export const WeatherAppp = () => {
 let api_key="79a4ecac097aaff7432b8ab3f5c00dc1"

 const [Wicon,setWicon]=useState(cloud_icon)


 const search= async()=>{
  const element= document.getElementsByClassName("cityInput")
  console.log(element,'ee;;;e');
  console.log(element[0].value,'ooiiiii;;;e');
  if(element[0].value===""){
    return 0
  }
 let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
 
 let response=await fetch(url)
 let data=await response.json()
 console.log(response.status,data,'kokok');
 if(response.status==404){
   alert('Not found in DB')
  return
 }
 const humidity=document.getElementsByClassName('humidity_percent')
 const wind=document.getElementsByClassName('wind_speed')
 const temperature=document.getElementsByClassName('weather_temp')
 const location=document.getElementsByClassName('weather_location')

 humidity[0].innerHTML=data.main.humidity+ " %"
 wind[0].innerHTML=Math.floor(data.wind.speed)+ " km/h"
 temperature[0].innerHTML=Math.floor(data.main.temp)+ " °C"
 location[0].innerHTML=data.name


 if(data.weather[0].icon==='01d'||data.weather[0].icon==='01n'){
  setWicon(clear_icon)
 }else  if(data.weather[0].icon==='02d'||data.weather[0].icon==='02n'){
  setWicon(cloud_icon)
 }else  if(data.weather[0].icon==='03d'||data.weather[0].icon==='03n'){
  setWicon(drizzle_icon)
 }else  if(data.weather[0].icon==='04d'||data.weather[0].icon==='04n'){
  setWicon(rain_icon)
 }else  if(data.weather[0].icon==='09d'||data.weather[0].icon==='09n'){
  setWicon(rain_icon)
 }else  if(data.weather[0].icon==='10d'||data.weather[0].icon==='10n'){
  setWicon(rain_icon)
 }else  if(data.weather[0].icon==='13d'||data.weather[0].icon==='13n'){
  setWicon(snow_icon)
 }


 }

  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="cityInput"
            placeholder="Enter City Name"
          />
          <div className="search_icon" onClick={()=>search()}>
           
            <button className="button">Search</button>
          </div>
        </div>
        <div className="weather-image">
          <img src={Wicon} alt="" />
        </div>
       <div>
       <div className="weather_temp">-- °C</div>
        <div className="weather_location">Enter the Location</div>
        <div className="data_container">
          <div className="element">
            <img src={humidity_icon} className="icon" alt="" />
            <div className="data">
              <div className="humidity_percent">-- %</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} className="icon" alt="" />
            <div className="data">
              <div className="wind_speed">-- km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};
