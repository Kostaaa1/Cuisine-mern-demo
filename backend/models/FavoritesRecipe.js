const mongoose = require("mongoose");

const FavoriteRecipeSchema = new mongoose.Schema({
    name: { type: String, unique: true, reqiored: true },
    data: {},
});

module.exports = mongoose.model("Favorite", FavoriteRecipeSchema);
