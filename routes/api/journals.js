const express = require("express");
const router = express.Router();
const journalsCtrl = require("../../controllers/api/journals");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'

router.post("/", journalsCtrl.createJournal);

module.exports = router;
