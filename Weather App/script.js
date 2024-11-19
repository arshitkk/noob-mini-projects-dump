let userTab = document.querySelector(".user-tab");
let searchTab = document.querySelector(".search-tab");
let searchBar = document.querySelector(".search-bar");
let searchInput = document.querySelector(".search-input");
let loading = document.querySelector(".loading-img");
const searchForm = document.querySelector(".search-form");
let weatherInfoContainer = document.querySelector(".weather-info-container");
let clickedTab;
const APIKey = "0bb053195ba3bbf768ea5a1be35c176e";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = searchInput.value;
  if (cityName == "") return;
  else searchWeather(cityName);
});

async function searchWeather(city) {
  weatherInfoContainer.classList.remove("active");
  loading.classList.add("active");
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
  );
  let data = await response.json();
  renderWeatherInfo(data);
  loading.classList.remove("active");
  weatherInfoContainer.classList.add("active");
}

function renderWeatherInfo(weatherInfo) {
  const name = document.querySelector(".city-name");
  const country = document.querySelector(".country-icon");
  const desc = document.querySelector(".weather-desc");
  const icon = document.querySelector(".weather-icon");
  const temp = document.querySelector(".weather-temp");
  const windspeed = document.querySelector(".windspeed");
  const humidity = document.querySelector(".humidity");
  const clouds = document.querySelector(".clouds");

  // fatching the weather info values

  name.innerText = weatherInfo?.name;
  country.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  desc.innerText = weatherInfo?.weather?.[0]?.description;
  icon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp} °C`;
  windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity}%`;
  clouds.innerText = `${weatherInfo?.clouds?.all}%`;
}

function switchTab(e) {
  clickedTab = e.currentTarget;
  if (clickedTab == userTab) {
    userTab.classList.add("current-tab");
    searchTab.classList.remove("current-tab");
    searchBar.classList.remove("active");
    weatherInfoContainer.classList.remove("active");

    clickedTab = searchTab;
  } else if (clickedTab == searchTab) {
    searchTab.classList.add("current-tab");
    userTab.classList.remove("current-tab");
    searchBar.classList.add("active");
    clickedTab = userTab;
    weatherInfoContainer.classList.remove("active");
  }
}
userTab.addEventListener("click", switchTab);
searchTab.addEventListener("click", switchTab);

// async function renderWeather() {
//     let city = 'jammu';
//     let APIKey = "0bb053195ba3bbf768ea5a1be35c176e";
//    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);

//     let data = await response.json();
//     console.log(data);
// }
let userCoordinates = {};

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation Not Supported");
  }
}

function showPosition(coordinates) {
  userCoordinates = {
    lat: coordinates.coords.latitude,
    lon: coordinates.coords.longitude,
  };
  fetchUserLocation(userCoordinates);
}

async function fetchUserLocation({ lat, lon }) {
  loading.classList.add("active");
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
  );
  let data = await response.json();
  renderWeatherInfo(data);
  loading.classList.remove("active");
  weatherInfoContainer.classList.add("active");
}
userTab.addEventListener("click", getUserLocation);
