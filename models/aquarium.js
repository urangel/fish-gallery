const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aquariumSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  fish: Array,
  date: { type: Date, default: Date.now }
});

const Aquarium = mongoose.model("Aquarium", aquariumSchema);

module.exports = Aquarium;
