const express = require("express");
const router = express.Router();
const journalsCtrl = require("../../controllers/api/journals");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'

router.post("/", ensureLoggedIn, journalsCtrl.createJournal);

router.get("/", ensureLoggedIn, journalsCtrl.getUsersJournals);

router.delete("/:id/delete", ensureLoggedIn, journalsCtrl.deleteJournal);

router.put("/:id", ensureLoggedIn, journalsCtrl.updateJournal);

module.exports = router;
