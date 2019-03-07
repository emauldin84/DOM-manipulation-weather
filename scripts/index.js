// ******************************
// Using the tdd-weather repo as your starter code, create and append DOM elements that show the following information:

// city name
// temperature
// wind speed
// ******************************

const cityDiv = document.createElement('div');
const tempDiv = document.createElement('div');
const windSpeedDiv = document.createElement('div');
const lineBreak = document.createElement('br');

const container = document.querySelector('[data-container]');

container.append(cityDiv);
container.append(tempDiv);
container.append(windSpeedDiv);

cityDiv.textContent = `City: ${atlWeather.name}`;
tempDiv.textContent = `Temperature: ${atlWeather.main.temp}`;
windSpeedDiv.textContent = `Wind Speed: ${atlWeather.wind["speed"]}`;

// ******************************
// Bonus #1: Showing an icon
// ******************************
function findIconUrl(weatherObj) {
  const iconUrl = 'http://openweathermap.org/img/w/' + atlWeather.weather[0].icon + '.png';

  return iconUrl;
};

// console.log(findIconUrl(atlWeather));

function displayUrl(event) {
  const iconDiv = document.createElement('img');
  iconDiv.setAttribute('src', event);

  container.append(iconDiv);
  container.append(lineBreak);
};

displayUrl(findIconUrl(atlWeather))

// ******************************
// Bonus #2: Showing a map
// ******************************
function buildCoordinatesUrl(weatherObj) {
  const latitude = atlWeather.coord.lat;
  const longitude = atlWeather.coord.lon;
  const coordinatesUrl = "http://maps.google.com/maps?q=" + latitude + ', ' +  longitude + "&z=15&output=embed";

  return coordinatesUrl;
  // console.log(coordinatesUrl);
};

function displayMap(event) {
  const mapIframe = document.createElement('iframe');
  mapIframe.setAttribute('src', event);

  container.append(mapIframe);
};

displayMap(buildCoordinatesUrl(atlWeather));

// ******************************
// Bonus #3: Converting the sunrise/sunset
// ******************************

const sunriseDiv = document.createElement('div');
const sunsetDiv = document.createElement('div');

container.append(sunriseDiv);
container.append(sunsetDiv);

// format sunrise
const sunriseUnix = atlWeather.sys.sunrise;
const sunriseDate = new Date(sunriseUnix * 1000);
const sunriseHours = sunriseDate.getHours();
const sunriseMins = "0" + sunriseDate.getMinutes();
const sunriseSecs = "0" + sunriseDate.getSeconds();
const formattedSunrise = sunriseHours + ':' + sunriseMins.substr(-2) + ':' + sunriseSecs.substr(-2);

// format sunset
const sunsetUnix = atlWeather.sys.sunset;
const sunsetDate = new Date(sunsetUnix * 1000);
const sunsetHours = sunsetDate.getHours();
const sunsetMins = "0" + sunsetDate.getMinutes();
const sunsetSecs = "0" + sunsetDate.getSeconds();
const formattedSunset = sunsetHours + ':' + sunsetMins.substr(-2) + ':' + sunsetSecs.substr(-2);

sunriseDiv.textContent = `Sunrise: ${formattedSunrise}`;
sunsetDiv.textContent = `Sunset: ${formattedSunset}`;



















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

