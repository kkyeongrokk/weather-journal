const Journal = require("../../models/journal");
const Weather = require("../../models/weather");

module.exports = {
    createJournal,
    getUsersJournals,
    deleteJournal,
    updateJournal,
};

async function createJournal(req, res) {
    try {
        const weatherInDb = await Weather.exists({
            lat: req.body.weather.lat,
            lon: req.body.weather.lon,
            date: new Date(),
        });
        let currentWeather;
        if (!weatherInDb)
            currentWeather = await Weather.create(req.body.weather);
        else
            currentWeather = await Weather.findOne({
                lat: req.body.weather.lat,
                lon: req.body.weather.lon,
                date: new Date(),
            });

        req.body.journal.weather = currentWeather._id;
        req.body.journal.user = req.user._id;
        await Journal.create(req.body.journal);
        const allUserJournals = await Journal.find({
            user: req.user._id,
        })
            .populate("weather")
            .exec();

        res.status(200).json(allUserJournals);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function getUsersJournals(req, res) {
    const allUserJournals = await Journal.find({
        user: req.user._id,
    }).populate("weather");

    res.json(allUserJournals);
}

async function deleteJournal(req, res) {
    try {
        const journalId = req.params.id;

        await Journal.findOneAndDelete({ _id: journalId });
        const usersJournals = await Journal.find({
            user: req.user._id,
        }).populate("weather");

        res.status(200).json(usersJournals);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function updateJournal(req, res) {
    try {
        const journalId = req.params.id;
        await Journal.findOneAndUpdate({ _id: journalId }, req.body, {
            new: true,
        });
        const usersJournals = await Journal.find({
            user: req.user._id,
        }).populate("weather");
        res.status(200).json(usersJournals);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
