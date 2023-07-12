const Weather = require("../../models/weather");
const fetch = require("node-fetch");

module.exports = {
  searchAddress,
  getWeather,
};

async function searchAddress(req, res) {
  try {
    const results = await fetch(
      `${process.env.GOOGLE_URL}address=${req.query.q}&key=${process.env.GOOGLE_KEY}&maxResults=10`,
      { method: "GET" }
    );
    const addressData = await results.json();
    res.status(200).json(addressData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getWeather(req, res) {
  try {
    const options = {
      method: "GET",
      headers: {
        apiKey: process.env.WEATHER_KEY,
        "Content-Type": "application/json",
      },
    };
    const results = await fetch(
      `${process.env.WEATHER_URL}lat=${req.query.lat}&lon=${req.query.lon}&appid=${process.env.WEATHER_KEY}&units=imperial`,
      options
    );
    const weatherData = await results.json();
    console.log(weatherData);
    res.status(200).json(weatherData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
