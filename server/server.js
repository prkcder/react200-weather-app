const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`)
    .then((response) => {
      res.send(response.data).status(200);
    })
    .catch(() => {
      res.status(404).send('error');
    })
});

module.exports = app;
