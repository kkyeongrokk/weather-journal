const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema(
    {
        location: { type: String },
        lat: { type: Number },
        lon: { type: Number },
        date: { type: Date, default: new Date() },
        weatherDescription: { type: String },
        avgTemp: { type: Number },
        maxTemp: { type: Number },
        minTemp: { type: Number },
        humidity: { type: Number },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Weather", weatherSchema);
