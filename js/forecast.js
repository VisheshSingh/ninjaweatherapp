const key = 't14zRKpZvWL6Y5V9se49PXtqTikVmGhe';

// get weather information
const getWeather = async id => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
  const query = `?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get ciy information
const getCity = async city => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;

  const url = base + query;
  const response = await fetch(url);
  const data = await response.json();

  return data[0];
};
