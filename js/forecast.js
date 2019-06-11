const key = 't14zRKpZvWL6Y5V9se49PXtqTikVmGhe';

const getCity = async city => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;

  const url = base + query;
  const response = await fetch(url);
  const data = await response.json();

  return data[0];
};

getCity('Bloomington')
  .then(data => console.log('City:', data))
  .catch(err => console.log(err.message));
