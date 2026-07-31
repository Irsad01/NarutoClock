

import { applyTheme } from "./theme.js";

const API_KEY = "2f34967a32b8b68d96b37cfdab8f1ea7";



const temperature = document.getElementById("temperature");

const description = document.getElementById("weatherDescription");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

const weatherIcon = document.getElementById("weatherIcon");


function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            position=>{

                getWeather(

                    position.coords.latitude,

                    position.coords.longitude

                );

            },

            ()=>{

                console.log("Using default location");

                getWeather(

                    51.5085,

                    -0.1257

                );

            }

        );

    }

}



async function getWeather(lat,lon){

    try{

        const url=

`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

        const response=await fetch(url);

        const data=await response.json();

        if(data.cod!=200){

            console.error(data);

            return;

        }

        updateWeather(data);

        updateTheme(data);

    }

    catch(err){

        console.error(err);

    }

}



function updateWeather(data){

    temperature.textContent=

    `${Math.round(data.main.temp)}°C`;

    description.textContent=

    data.weather[0].description;

    humidity.textContent=

    `${data.main.humidity}%`;

    wind.textContent=

    `${data.wind.speed} m/s`;

    const icon=

    data.weather[0].icon;

    weatherIcon.className="";

    if(icon.startsWith("01")){

        weatherIcon.className=

        "fa-solid fa-sun";

    }

    else if(

        icon.startsWith("02") ||

        icon.startsWith("03") ||

        icon.startsWith("04")

    ){

        weatherIcon.className=

        "fa-solid fa-cloud";

    }

    else if(

        icon.startsWith("09") ||

        icon.startsWith("10")

    ){

        weatherIcon.className=

        "fa-solid fa-cloud-rain";

    }

    else if(icon.startsWith("11")){

        weatherIcon.className=

        "fa-solid fa-bolt";

    }

    else if(icon.startsWith("13")){

        weatherIcon.className=

        "fa-solid fa-snowflake";

    }

    else if(icon.startsWith("50")){

        weatherIcon.className=

        "fa-solid fa-smog";

    }

}



function updateTheme() {

    const hour = new Date().getHours();

    console.log("Current Hour:", hour);

    document.body.classList.remove("day", "night");

    if (hour >= 6 && hour < 18) {

        console.log("DAY");

        applyTheme("day");

    } else {

        console.log("NIGHT");

        applyTheme("night");

    }

    console.log("Body Class:", document.body.className);

}


getLocation();