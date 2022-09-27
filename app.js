const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const api = "7e2e1395c34188ede18294c17c2f44be";

const input = document.querySelector(".form-control");
const searchButton = document.querySelector(".btn");

const warning = document.querySelector(".norepeat");
const icon = document.querySelector(".text-end");

const row = document.querySelector(".row");
const cities = [];

searchButton.addEventListener("click", () => {
  if (cities.includes(input.value)) {
    warning.innerHTML = `${input.value} has already displayed`;
  } else {
    cities.push(input.value);
    warning.innerHTML = ``;
    wheatherCondition(input.value);
    input.value = "";
    // console.log(input.value);
  }
});

const wheatherCondition = (cityName) => {
  const fetchApi = `${url}${cityName}&appid=${api}&units=metric&lang=tr`;
  fetch(fetchApi)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      applyData(data);
    });
};
const applyData = (data) => {
  const {
    main: { temp },
    main: { temp_min },
    main: { temp_max },
    name,
    sys: { country },
    weather,
  } = data;
  // console.log(temp, temp_min, country, weather[0].description, name);

  row.innerHTML =
    `<div class="col-lg-3 col-md-4 col-sm-6">
  <div class="card" >
    <img src="./img/${weather[0].icon}.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title display-3 text-center">${name} <span>${country}</span></h5>
      <p class="card-text display-4 text-center">${temp}°C</p>
      <p class="text-center">Min:${temp_min}°C - Max:${temp_max}°C</p>
      <p class="display-6 text-center">${weather[0].description}</p>
      <div class="text-end">
          <i class="fa-solid fa-trash fa-xl"></i>
      </div>
    </div>
  </div>
</div>` + row.innerHTML;
};

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    searchButton.click();
  }
});

window.onload = function () {
  input.focus();
};

icon.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
});
