const cityDiv = document.createElement('div');
const tempDiv = document.createElement('div');
const windSpeedDiv = document.createElement('div');

const container = document.querySelector('[data-container]')

container.append(cityDiv);
container.append(tempDiv);
container.append(windSpeedDiv);

cityDiv.textContent = `City: ${atlWeather.name}`;
tempDiv.textContent = `Temperature: ${atlWeather.main.temp}`;
windSpeedDiv.textContent = `Wind Speed: ${atlWeather.wind["speed"]}`;




























function getLocationName(weather) {
  const city = new Map();
  const cityValues = Object.values(weather); // array of city values
  return cityValues[10]; //city name is in index 10
}

function getLocationCountry(weather) {
  console.log(weather);
  return weather.sys.country;
}
function getLocationLatitude(weather) {
  return weather.coord.lat;
}
function getLocationLongitude(weather) {
  return weather.coord.lon;
}
function getDescription(weather) {
  return weather.weather[0].description;
}
function getWindSpeed(weather) {
  return weather.wind["speed"];
}
function getSunrise(weather) {
  return weather.sys["sunrise"];
}

