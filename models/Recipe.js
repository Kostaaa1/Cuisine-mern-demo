const mongoose = require("mongoose");

const PopularSchema = new mongoose.Schema({
    popular: {},
});

module.exports = mongoose.model("Popular", PopularSchema);
