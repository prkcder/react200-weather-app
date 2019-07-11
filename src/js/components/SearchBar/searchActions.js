const axios = require('axios');

export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${city}`)
  };
}

export function updateOnChange(city) {
  return {
    type: 'UPDATE_CITY_INPUT',
    payload: { city }
  };
}
