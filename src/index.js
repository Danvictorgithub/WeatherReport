import './style.css';
import getDay from 'date-fns/getDay';
import d01 from './01d@4x.png';
import n01 from './01n@4x.png';
import d02 from './02d@4x.png';
import n02 from './02n@4x.png';
import d03 from './03d@4x.png';
import n03 from './03n@4x.png';
import d04 from './04d@4x.png';
import n04 from './04n@4x.png';
import d09 from './09d@4x.png';
import n09 from './09n@4x.png';
import d10 from './10d@4x.png';
import n10 from './10n@4x.png';
import d11 from './11d@4x.png';
import n11 from './11n@4x.png';
import d13 from './13d@4x.png';
import n13 from './13n@4x.png';
import d50 from './50d@4x.png';
import n50 from './50n@4x.png';

const inputCity = document.querySelector('input[type="text"]');
const buttonInput = document.querySelector('button[type="button"]');

let firstCardDay = document.querySelector('.firstCardDay');
let firstCardImage = document.querySelector('.firstCardImage');
let firstCardTemperature = document.querySelector('.firstCardTemperature');

let secondCardDay = document.querySelector('.secondCardDay');
let secondCardImage = document.querySelector('.secondCardImage');
let secondCardTemperature = document.querySelector('.secondCardTemperature');

let thirdCardDay = document.querySelector('.thirdCardDay');
let thirdCardImage = document.querySelector('.thirdCardImage');
let thirdCardTemperature = document.querySelector('.thirdCardTemperature');

let fourthCardDay = document.querySelector('.fourthCardDay');
let fourthCardImage = document.querySelector('.fourthCardImage');
let fourthCardTemperature = document.querySelector('.fourthCardTemperature');

let fifthCardDay = document.querySelector('.fifthCardDay');
let fifthCardImage = document.querySelector('.fifthCardImage');
let fifthCardTemperature = document.querySelector('.fifthCardTemperature');


let cityName = document.querySelector('.cityName');
let temperature = document.querySelector('.temperature');
let currentDay = document.querySelector('.current-day');
let description = document.querySelector('.description');
let humidity = document.querySelector('.humidityVal');
let wind = document.querySelector('.windval');
let pressure = document.querySelector('.pressureVal');
let visibility = document.querySelector('.visibilityVal');
let seaLevel = document.querySelector('.sea-levelVal');
let precipation = document.querySelector('.precipitationVal');
let mainImage = document.querySelector('.icon');
buttonInput.addEventListener('click', 
    function(event){
        let city = inputCity.value;
        currentData = getWeatherData(city);
        updateWeather();
    }
);
let currentData = getWeatherData('Philippines');
updateWeather();
async function getWeatherData(CityName) {
    let responser;
    try {
        responser = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + CityName + "&appid=6978b8ee3b6ede7e11aea9111f201802", {mode: 'cors'});
    } catch (err) {
        throw new Error("Something is wrong");
    }
    const weatherData = await responser.json();
    return weatherData;
}
currentData.then(function(response){
    console.log(response);
} );
function updateWeather() {
    currentData.then(function(response) {
        console.log(response);
        if(response.cod === '200') {
            firstCardDay.textContent = `${returnDay(getDay(new Date(response.list[7].dt_txt.split(' ')[0])))}`;
            firstCardImage.src = returnIcon(response.list[7].weather[0].icon);
            firstCardTemperature.textContent = `${ktoC(response.list[7].main.temp)} °C`;

            secondCardDay.textContent = `${returnDay(getDay(new Date(response.list[15].dt_txt.split(' ')[0])))}`;
            secondCardImage.src = returnIcon(response.list[15].weather[0].icon);
            secondCardTemperature.textContent = `${ktoC(response.list[15].main.temp)} °C`;

            thirdCardDay.textContent = `${returnDay(getDay(new Date(response.list[23].dt_txt.split(' ')[0])))}`;
            thirdCardImage.src = returnIcon(response.list[23].weather[0].icon);
            thirdCardTemperature.textContent = `${ktoC(response.list[23].main.temp)} °C`;

            fourthCardDay.textContent = `${returnDay(getDay(new Date(response.list[31].dt_txt.split(' ')[0])))}`;
            fourthCardImage.src = returnIcon(response.list[31].weather[0].icon);
            fourthCardTemperature.textContent = `${ktoC(response.list[31].main.temp)} °C`;

            fifthCardDay.textContent = `${returnDay(getDay(new Date(response.list[39].dt_txt.split(' ')[0])))}`;
            fifthCardImage.src = returnIcon(response.list[39].weather[0].icon);
            fifthCardTemperature.textContent = `${ktoC(response.list[39].main.temp)} °C`;

            mainImage.src = returnIcon(response.list[0].weather[0].icon);
            cityName.textContent = `${response.city.name}`;
            temperature.textContent = `${ktoC(response.list[0].main.temp)} °C`;
            currentDay.textContent = `${returnDay(getDay(new Date(response.list[0].dt_txt.split(' ')[0])))}`;
            description.textContent = `${response.list[0].weather[0].description}`;
            humidity.textContent = `${response.list[0].main.humidity}`;
            wind.textContent = `${response.list[0].wind.speed}`;
            pressure.textContent = `${response.list[0].main.pressure}`;
            visibility.textContent = `${response.list[0].visibility}`;
            seaLevel.textContent = `${response.list[0].main.sea_level}`;
            if (response.list[0].rain) {
                precipation.textContent = `${response.list[0].rain['3h']}`;
            } else {
                precipation.textContent = 'No record';
            }
        }
    });
}
function ktoC(kelvin) {
    return Math.floor(kelvin-273.15);
}
function returnDay(index) {
    switch (index) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
    }
}
function returnIcon(id) {
    switch (id) {
        case '01d':
            return d01;
        case '01n':
            return n01;
        case '02d':
            return d02;
        case '02n':
            return n02;
        case '03d':
            return d03;
        case '03n':
            return n03;
        case '04d':
            return d04;
        case '04n':
            return n04;
        case '09d':
            return d09;
        case '09n':
            return n09;
        case '10d':
            return d10;
        case '10n':
            return n10;
        case '11d':
            return d11;
        case '11n':
            return n11;
        case '13d':
            return d13;
        case '13n':
            return n13;
        case '50d':
            return d50;
        case '50n':
            return n50;
    }
}