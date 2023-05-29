let body = document.body;
let cityName = document.getElementById("cityName");
let weatherInfo = document.getElementById("weatherInfo");
let weatherIcon = document.getElementById("weatherIcon")


// fetching weather data from API
fetch("https://api.openweathermap.org/data/2.5/weather?lat=56.67&lon=12.85&appid=fa2504dd66590b3d35b34eee87af1956&units=metric")
  .then((response) => response.json())
  .then(weatherData => halmstadWeather(weatherData));


//function to get weather data for Halmstad, creating elements and showing the data in HTML.
function halmstadWeather(weatherData) {
  
  let name = weatherData.name;
  let coordLon = weatherData.coord.lon;
  let coordLat = weatherData.coord.lat;
  let temperature = weatherData.main.temp;
  let feelsLikeTemp = weatherData.main.feels_like;
  let pressure = weatherData.main.pressure;
  let humidity = weatherData.main.humidity;
  let wDescription = weatherData.weather[0].description;
  let wind = weatherData.wind.speed;
  let wIcon = weatherData.weather[0].icon;


  let city = document.createElement("h1");
  city.innerText = name;

  let coordItem = document.createElement("h4");
  coordItem.innerHTML = "Longitude " + coordLon + " Latitude: " + coordLat;

  let temperatureItem = document.createElement("li");
  temperatureItem.innerText = "Temperature: " + temperature + " °C";

  let feelsLikeItem = document.createElement("li");
  feelsLikeItem.innerText = "Feels like: " + feelsLikeTemp + " °C";

  let pressureItem = document.createElement("li");
  pressureItem.innerText = "Pressure: " + pressure + " hPa";

  let humidityItem = document.createElement("li");
  humidityItem.innerText = "Humidity: " + humidity + " %";

  let descriptionItem = document.createElement("li");
  descriptionItem.innerText = "Description: " + capLetter(wDescription);

  let windItem = document.createElement("li");
  windItem.innerText = "Wind: " + wind + " m/s";

  let iconItem = document.createElement("img");
  iconItem.src = "https://openweathermap.org/img/wn/" + wIcon + "@4x.png";
  iconItem.innerHTML = iconItem;
  iconItem.classList = "weatherIcon";

  cityName.append(city, coordItem);
  weatherInfo.append(temperatureItem, feelsLikeItem, descriptionItem, pressureItem, humidityItem, windItem)
  weatherIcon.append(iconItem)
}

// function to make first letter uppercase in string
function capLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to show current weekday, date and time
function currentTimeDate() {
  let currentTime = new Date();

  let weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let weekday = weekdayArr[currentTime.getDay()];

  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  let year = currentTime.getFullYear();
  let day = currentTime.getDate();
  let month = currentTime.getMonth() + 1;
  document.getElementById("dateTime").innerHTML = weekday + "<br>" + hour + ":" + min + ":" + sec + "<br>" + year + "/" + month + "/" + day;
}



// set intervals for calling functions:
// call currentTimeDate every second
setInterval(currentTimeDate, 1000);

//call halmstadWeather every 15 mins
setInterval(halmstadWeather, 900000);