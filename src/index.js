import "./styles.css";
import { getWeatherData } from "./api.js"

const formLocationInput = document.getElementById('location');
const form = document.getElementById('weather-form');
// const form = document.getElementById('location-btn');

function populateWeatherInfo(locationData) {
  document.querySelector('.temp > :nth-child(2)').innerText = locationData.temp;
  document.querySelector('.conditions > :nth-child(2)').innerText = locationData.conditions;
  document.querySelector('.precip > :nth-child(2)').innerText = locationData.precip;
  document.querySelector('.wind > :nth-child(2)').innerText = locationData.windspeed;
  document.querySelector('.time > :nth-child(2)').innerText = locationData.datetime;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let location = formLocationInput.value;
  console.log(location);
  let locationData = await getWeatherData(location);
  console.log(locationData);
  populateWeatherInfo(locationData);
})

console.log('hello world');