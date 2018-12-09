const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const getCurrent = city => {
  return fetch(`${API_URL}weather?q=${city}&APPID=${API_KEY}&units=imperial`);
};

const getForecast = city => {
  return fetch(`${API_URL}forecast?q=${city}&APPID=${API_KEY}&units=imperial`);
};

export default { getCurrent, getForecast };
