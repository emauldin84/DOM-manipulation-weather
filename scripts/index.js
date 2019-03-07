// Using the tdd-weather repo as your starter code, create and append DOM elements that show the following information:

// city name
// temperature
// wind speed


const cityDiv = document.createElement('div');
const tempDiv = document.createElement('div');
const windSpeedDiv = document.createElement('div');

const container = document.querySelector('[data-container]');

container.append(cityDiv);
container.append(tempDiv);
container.append(windSpeedDiv);

cityDiv.textContent = `City: ${atlWeather.name}`;
tempDiv.textContent = `Temperature: ${atlWeather.main.temp}`;
windSpeedDiv.textContent = `Wind Speed: ${atlWeather.wind["speed"]}`;

// Bonus #1: Showing an icon

function findIconUrl(weatherObj) {
  const iconUrl = 'http://openweathermap.org/img/w/' + atlWeather.weather[0].icon + '.png';

  return iconUrl;
};

// console.log(findIconUrl(atlWeather));

function displayUrl(event) {
  const iconDiv = document.createElement('img');
  iconDiv.setAttribute('src', event);

  container.append(iconDiv);
};

displayUrl(findIconUrl(atlWeather))


// Bonus #2: Showing a map
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

