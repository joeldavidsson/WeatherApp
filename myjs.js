let body = document.body;
let hej = document.getElementById("hej");
let kvast = document.getElementById("kvast");


fetch("https://api.openweathermap.org/data/2.5/weather?lat=56.67&lon=12.85&appid=fa2504dd66590b3d35b34eee87af1956&units=metric")
  .then((response) => response.json())
  .then(weatherData => hVader(weatherData));
  
  

function hVader(weatherData) {
  let name = weatherData.name;
  let temperature = weatherData.main.temp;
  let description = weatherData.weather[0].description;

  let cityName = document.createElement("h1");
  cityName.innerText = name;
  
  let temperatureItem = document.createElement("li");
  temperatureItem.innerText = 'Temperature: ' + temperature + '°C';

  let descriptionItem = document.createElement("div");
  descriptionItem.innerText = 'Description: ' + description;

  hej.append(cityName, temperatureItem, descriptionItem);
  
  //console.log(weatherData)
  
}

