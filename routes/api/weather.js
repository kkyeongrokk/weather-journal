const express = require("express");
const router = express.Router();
const weatherCtrl = require("../../controllers/api/weather");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'

router.get("/searchAddress", weatherCtrl.searchAddress);

router.get("/getWeather", weatherCtrl.getWeather);

module.exports = router;
