const mongoose = require("mongoose");

const SearchedRecipeSchema = new mongoose.Schema({
    name: { type: String, unique: true, reqiored: true },
    data: {},
});

module.exports = mongoose.model("Searched", SearchedRecipeSchema);
