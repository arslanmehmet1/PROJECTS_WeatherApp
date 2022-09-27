const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const api = "7e2e1395c34188ede18294c17c2f44be";

const input = document.querySelector(".form-control");
const searchButton = document.querySelector(".btn");

searchButton.addEventListener("click", () => {
  wheatherCondition(input.value);
  console.log(input.value);
});

const wheatherCondition = (cityName) => {
  const fetchApi = `${url}${cityName}&appid=${api}&units=metric&lang=tr`;
  fetch(fetchApi)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
