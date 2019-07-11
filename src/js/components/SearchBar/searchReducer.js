const defaultState = {
  cityName: 'Tokyo',
  lat: 35.69,
  lon: 139.76,
  temp: 65.89,
  pressure: 1011,
  humidity: 82,
  temp_min: 64,
  temp_max: 68,
  windSpeed: 10.29,
  history: [],
  error: ''
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        cityData: payload.data,
        cityName: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        temp_min: payload.data.main.temp_min,
        temp_max: payload.data.main.temp_max,
        windSpeed: payload.data.wind.speed,
        history: [...state.history, {
          cityName: payload.data.name,
          date: new Date().toLocaleString()
        }]
      };
    }

    case 'GET_WEATHER_REJECTED': {
      return {
        ...state,
        cityName: '',
        error: 'City not found',
      };
    }

    case 'UPDATE_CITY_INPUT': {
      return {
        ...state,
        city: payload.city,
      };
    }

    default: return state;
  }
}
