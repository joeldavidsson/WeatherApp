let body = document.body;
let cityName = document.getElementById("cityName");
let weatherInfo = document.getElementById("weatherInfo");
let weatherIcon = document.getElementById("weatherIcon");


fetch("https://api.openweathermap.org/data/2.5/weather?lat=56.67&lon=12.85&appid=fa2504dd66590b3d35b34eee87af1956&units=metric")
  .then((response) => response.json())
  .then(weatherData => hVader(weatherData));
  
  

function hVader(weatherData) {
  let name = weatherData.name;
  let coordLon = weatherData.coord.lon;
  let coordLat = weatherData.coord.lat;
  let temperature = weatherData.main.temp;
  let pressure = weatherData.main.pressure;
  
  let wDescription = weatherData.weather[0].description;
  let wIcon = weatherData.weather[0].icon;

  let city = document.createElement("h1");
  city.innerText = name;
  
  let coordItem = document.createElement("h4");
  coordItem.innerHTML = "Longitude " + coordLon + "<br>Latitude: " + coordLat;

  let temperatureItem = document.createElement("div");
  temperatureItem.innerText = "Temperature: " + temperature + "°C";

  let pressureItem = document.createElement("div");
  pressureItem.innerText = "Pressure: " + pressure + " hPa";

  let descriptionItem = document.createElement("div");
  descriptionItem.innerText = "Description: " + wDescription;

  let iconItem = document.createElement("img");
  iconItem.innerHTML = "Icon: " + wIcon;
  iconItem.classList = "wIcon";


  cityName.append(city, coordItem);
  weatherInfo.append(temperatureItem, descriptionItem, pressureItem)
  weatherIcon.append(iconItem);

  
  console.log(weatherData)
  
}

