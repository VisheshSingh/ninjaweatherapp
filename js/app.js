const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
  //   const cityDetails = data.cityDetails;
  //   const weather = data.weather;

  const { cityDetails, weather } = data; // Object destructuring

  details.innerHTML = `
  <h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Imperial.Value}</span>
    <span>&deg;C</span>
  </div>
  `;

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

  // set image day or night
  time.setAttribute(
    'src',
    weather.IsDayTime ? '/img/day.svg' : '/img/night.svg'
  );

  // set icon
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
};

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weather
  };
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.city.value;
  cityForm.reset();

  updateCity(city)
    .then(data => {
      console.log(data);
      return updateUI(data);
    })
    .catch(err => console.log(err.message));

  // set local storage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => {
      console.log(data);
      return updateUI(data);
    })
    .catch(err => console.log(err.message));
}
