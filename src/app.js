function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let weatherConditionElememt = document.querySelector("#weatherCondition");
  weatherConditionElememt.innerHTML = response.data.weather[0].description;
  let humidtyElement = document.querySelector("#humidity");
  humidtyElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "21b02ea326cb59e497753608964f41f1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
