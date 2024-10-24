function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature-now");
  temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
function searchCity(city) {
  let apiKey = "6td3328233211ee5oa4079e6eef2f07b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(refreshWeather);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");
  searchCity(searchInput.value);
}

let searchFormInput = document.querySelector("#search-form");
searchFormInput.addEventListener("submit", search);

searchCity("London");