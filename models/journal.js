const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema(
  {
    name: { type: String, required: true },
    journal: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Journal", journalSchema);
