/*  Important information to setup the project. */

/* 
    ### sources to valid api key:
    https://openweathermap.org/appid#example
    https://home.openweathermap.org/api_keys
*/

/*
    ### How can I switch between temperature units in API calls?
    Temperature is available in Fahrenheit, Celsius and Kelvin units. Kelvin is used by default, with no need to use the units parameter in API calls.
    For temperature in Celsius, use "units=metric". 
    Source: https://openweathermap.org/faq#:~:text=Temperature%20is%20available%20in%20Fahrenheit,units%20parameter%20in%20API%20calls.
*/

/* 
    ### JSON format API response fields:
    https://openweathermap.org/current
*/


// variables

let date = document.querySelector(".date span")

let weather1 = document.querySelector(".weather-1")
let weather2 = document.querySelector(".weather-2")
let weather3 = document.querySelector(".weather-3")
let weather4 = document.querySelector(".weather-4") 

let time1 = document.querySelector(".time-1")
let time2 = document.querySelector(".time-2")
let time3 = document.querySelector(".time-3")
let time4 = document.querySelector(".time-4")

let average = document.querySelector(".average")

let windSpeed = document.querySelector(".windSpeed span")
let humidity = document.querySelector(".humidity span")
let weatherParameter = document.querySelector(".weatherParameter span")
let weatherDescription = document.querySelector(".weatherDescription span")

let button = document.querySelector(".button") 

let todayDate = new Date();
console.log(todayDate);
date.textContent = `${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getFullYear()}`;

// events


// functions

async function weatherForecast() {

    try {
        const apiKey = "a0b6dbf50b04399ef8f5079a298d1e04"
        const input = document.querySelector(".input").value

        const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&q=${input}&units=metric`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        weather1.textContent = `${data.list[0].main.temp.toFixed(2)}°C`;
        weather2.textContent = `${data.list[1].main.temp.toFixed(2)}°C`;
        weather3.textContent = `${data.list[2].main.temp.toFixed(2)}°C`;
        weather4.textContent = `${data.list[3].main.temp.toFixed(2)}°C`;

        time1.textContent = data.list[0].dt_txt;
        time2.textContent = data.list[1].dt_txt;
        time3.textContent = data.list[2].dt_txt;
        time4.textContent = data.list[3].dt_txt;

        average.textContent = `${((data.list[0].main.temp + data.list[1].main.temp + data.list[2].main.temp + data.list[3].main.temp)/4).toFixed(2)}°C`;

        windSpeed.textContent = `${data.list[0].wind.speed.toFixed(2)} m/s`;
        humidity.textContent = `${data.list[0].main.humidity} %`;
        weatherParameter.textContent = data.list[0].weather[0].main;
        weatherDescription.textContent = data.list[0].weather[0].description;

    } catch (error) {
	console.error(error);
    }
}