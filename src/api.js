const API_KEY = 'JP2SQV2H3VZKF3Y2ZXNRJQZM9';

function buildApiStr(location) {
  let apiKey = API_KEY;
  const baseStr = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  const apiStr = `${baseStr}${location}?key=${apiKey}`;
  return apiStr;
}

async function getWeather(location) {
  let apiStr = buildApiStr(location);
  const res = await fetch(apiStr, {mode: 'cors'});
  const resJson = await res.json();
  // console.log(resJson);
  return resJson;
}
function processWeatherJson(weatherJson) {
  // want either currentConditions or days
  let curWeather = weatherJson.currentConditions;
  return curWeather;
  // console.log(curWeather);
}

export async function getWeatherData(location) {
  try {
    let weatherJson = await getWeather(location);
    let weatherData = processWeatherJson(weatherJson);
    return weatherData;
  } catch (e) {
    console.log(`Error: ${e}`); 
  }
}

console.log('api.js loaded');
// getWeatherData('london')